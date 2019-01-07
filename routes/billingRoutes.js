const keys = require("../config/keys");
var stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).send({ error: "You must log in!" });
      }
      const charge = await stripe.charges.create({
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: `$5 for ${req.body.card.name}`
      });
      req.user.credits += 5;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      alert(err);
    }
  });
};
