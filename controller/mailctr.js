const { response } = require("express");
var nodemailer = require("nodemailer");

exports.mailtoStudent = async (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: req.body.emailId,
      pass: req.body.password,
    },
  });

  var mailOptions = {
    from: req.body.emailId,
    to: req.body.studentEmail,
    subject: req.body.subject,
    text: req.body.text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send(info.response)  
    }
  });
};
