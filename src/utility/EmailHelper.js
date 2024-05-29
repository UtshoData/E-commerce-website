const nodemailer = require("nodemailer");

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'mavis.walsh51@ethereal.email',
        pass: 'MPSMeF1FK527fxjx8N'}
  });

  let mailOption = {
    from: "MERN Ecommerce Solution <mavis.walsh51@ethereal.email>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};
module.exports = EmailSend;
