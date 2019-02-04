## iFeedback

#### Demo : https://ifeedback-emails.herokuapp.com/

###### Create Surveys for your Clients.

---

## Description

Full Stack App using MERN (Mongo, Express, React, Node) Stack used to create Surveys and send them to single/multiple email addresses.

App uses SendGrid API to create emails, Stripe API to mock payments which are required to purchase credits. These credits are used to create Surveys.

## Instructions

- Login using your preferred method.
- App requires users to maintain a credit balance. Add Credits upon login on the Credits page.
- Click on the red + icon on the bottom right side of the screen to create a new Survey.
- Fill out the Survey Form and send to the desired email addresses.
- Customers (people receiving Survey emails), can respond to the Survey through a Yes/No option from the email.
- To track all the Surveys, navigate to the Surveys tab. Users can view details of any Survey and get to know how many customers have responded to the Surveys.

## Tech Stack

#### Backend

- The backend of this project uses Express and MongoDB. Mongo is a No-SQL database.
- Backend provides API to connect with our React front-end application. Each route has a validator to check and validate before persisting to the database.
- Backend uses several middlewares as bodyParser and passport manage authentication.
- App uses SendGrid API to send emails to customers. The API allows sending emails to multiple email addresses and allows reply functionality once a customer clicks on Yes/No option. This is useful for tracking Surveys. Users can not only send Surveys but also know how many responses have they recieved for a given Survey. For example if a user sends a Survey to 100 people to which 60 replied as Yes and 40 as No, User is able to get this information on the Survey Details page.
- App uses StripePayment API to mock payments. This project is designed for learning purposes therefore No real payments are accepted. Stripe provides a test credit card number (4242 4242 4242 4242) to be used on the credits payments page. Once a user has enough credits, the user can now start sending Surveys. Each Survey costs 1 credit.
- Authentication is supported by Passport.JS that uses the following Strategies
  - Passport Google OAuth 2.0 : [View Documentation](http://www.passportjs.org/packages/passport-google-oauth20/ 'passport-google-oauth20')
  - Passport Facebook : [View Documentation](http://www.passportjs.org/packages/passport-facebook/ 'passport-facebook')

#### Front End

- The Front End of the application uses React.JS.
- App uses Redux for state management and tracks authenticated users, user details and Surveys created by the user.
- App uses Private and Public routes to display private and public content.
- App uses Layout components to display public and private content depending upon user authentication state.
- App uses Materialize.CSS for simplistic and responsive view. App works on several screen sizes including large like Monitors, medium like Tablets and small like mobile devices.

#### App is built using the following tech stack :

- Axios
- Express
- Font Awesome
- Heroku
- Google OAuth
- Materialize CSS
- Mongo DB
- React.JS
- Redux State Management
- SendGrid API
- Stripe Payment API
- App is developed with Prod and Dev environments
