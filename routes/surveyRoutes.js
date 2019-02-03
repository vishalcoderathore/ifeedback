const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const { validateBody, schemas } = require('../middlewares/requireSurvey');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  // Get a list of surveys of the current user
  app.get('/api/surveys', requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });
    res.send(surveys);
  });

  /*
   * Route customers to a thanking page after they click a yes/no
   */
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thank You for your feedback.');
  });

  /*
   * To post new surveys, user needs to be logged in AND have enough available credits
   */
  app.post(
    '/api/surveys',
    requireLogin,
    requireCredits,
    validateBody(schemas.validSurvey),
    async (req, res) => {
      const { title, subject, body, recipients } = req.value.body;

      // Create new Survey
      const survey = new Survey({
        title,
        body,
        subject,
        recipients: recipients
          .split(',')
          .map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });

      try {
        // Send survey using SendGrid
        const mailer = new Mailer(survey, surveyTemplate(survey));
        await mailer.send();

        // Persist Survey to DB
        await survey.save();

        // Decrement credits from user account
        req.user.credits -= 1;
        const user = await req.user.save();
        res.send(user);
      } catch (err) {
        res.status(422).send({ err });
      }
    }
  );

  //Called by SendGrid to update our app when a end customer clicks yes/no in the survey
  app.post('/api/surveys/webhooks', (req, res) => {
    /*
     * Extract the path from the URL
     * Example: http://localhost:3000/api/surveys/597125awedf/yes => we need /api/surveys/597125awedf/yes
     */
    const p = new Path('/api/surveys/:surveyId/:choice');
    const events = _.map(req.body, event => {
      const pathname = new URL(event.url).pathname;
      const match = p.test(pathname);
      if (match) {
        return {
          email: event.email,
          surveyId: match.surveyId,
          choice: match.choice
        };
      }
    });
    // Remove undefined events
    const compactEvents = _.compact(events);

    //Remove duplicate events
    const uniqueEvents = _.uniqBy(compactEvents, 'email', 'surveyId');

    // Persist updates in Mongo DB
    uniqueEvents.forEach(({ surveyId, email, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: {
              email: email,
              responded: false
            }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }
      ).exec();
    });
    res.send({});
  });
};
