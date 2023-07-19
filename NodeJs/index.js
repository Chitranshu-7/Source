const login = require('./login')
const nodemailer = require('nodemailer');
async function sendEmail() {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: login.username,
        pass:login.password
      }
    });

    const mailOptions = {
      from: 'chitranshusaini8@gmail.com',
      to: 'dixitpunit786@gmail.com',
      subject: 'Badew mail check kr dubara',
      text: 'This is the body of the email.'
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error(error);
  }
}

sendEmail();
