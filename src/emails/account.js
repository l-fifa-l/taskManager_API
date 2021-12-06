const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "starktestic@gmail.com",
    subject: `Thanks for joining in!`,
    text: `welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "starktestic@gmail.com",
    subject: `its sad to say good bye!`,
    text: `Goodbye, ${name}. Let me know how you get along with the app.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

// const msg = {
//   to: 'madhuyadav0997@gmail.com',
//   from: 'starktestic@gmail.com',
//   subject: 'Sending with Twilio SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

// sgMail.send(msg).then((res, req) => {
//   console.log(res);
// }).catch((error) => {
//   console.log('error', error);
// });
