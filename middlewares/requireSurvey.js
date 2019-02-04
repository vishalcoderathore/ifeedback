const Joi = require('joi');

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).send({ error: 'Invalid Survey Form!' });
      }
      if (!req.value) {
        req.value = {};
      }
      req.value['body'] = result.value;
      next();
    };
  },

  schemas: {
    validSurvey: Joi.object().keys({
      title: Joi.string()
        .trim()
        .min(1)
        .required(),
      body: Joi.string()
        .trim()
        .required(),
      subject: Joi.string()
        .trim()
        .required(),
      recipients: Joi.string().required()
    })
  }
};
