const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  /*
   * Route customers to a thanking page after they click a yes/no
   */
  app.get("/feedback/surveys", (req, res) => {
    res.send("Thank You for your feedback.");
  });

  /*
   * To post new surveys, user needs to be logged in AND have enough available credits
   */
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    // Create new Survey
    const survey = new Survey({
      title,
      body,
      subject,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
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
  });
};
