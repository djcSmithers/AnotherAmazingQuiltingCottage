var express=require('express');
var bodyParser = require('body-parser')// importing body parser middleware to parse form content from HTML
var cors = require('./../cors');
const emailRouter = express.Router();
var nodemailer = require('nodemailer');//importing node mailer

function returnError(res, error) {
    res.status(500).json({
        message: 'An error occured',
        error: error
    });
}

emailRouter.route('/').options(cors.cors,(req,res)=>{
    console.log("Coming email here");
    res.sendStatus(200);
}).post(cors.cors,(req,res,next)=>{
  
  console.log("oooo",req.body.email)
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cj13810@gmail.com',//replace with your email
      pass: 'cj013810'//replace with your password
    }
  }); 
  
  var mailOptions = {
    from: 'cj13810@gmail.com',//replace with your email
    to: req.body.email,//replace with your email
    subject: `Quilting Order`,
    html:`This will have the information from the form <br><br> The test was succesful `
  };

  transporter.sendMail(mailOptions, function(error, info){

    res.status(200).send.json({
        message: 'Sent Successfully'
    }).catch(error => {
        returnError(res, error);
    })

  });
})


module.exports = emailRouter;