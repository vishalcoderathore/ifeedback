module.exports = (req, res, next) => {
  if (!req.user.credits > 0) {
    return res.status(409).send({
      error: 'Not enough credits. Please Add Credits to post surveys.'
    });
  }
  next();
};
