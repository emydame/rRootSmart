const nodemailer = require("nodemailer");
const { mail } = require("../config/env");

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
         user: mail.user,
         pass: mail.pass
     }
 });

const mailer = (options) => {
  const mailOptions = {
    from: mail.user,
    to: options.email,
    subject: options.subject,
    html:options.html,
  };  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent:  + ${info.response}`);
    }
  });
}

module.exports = mailer;
