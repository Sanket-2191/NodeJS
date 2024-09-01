// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from 'nodemailer';
import readline from 'readline';

async function Solution() {
  // Write your code here
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninjas2k16@gmail.com',
      pass: 'slwvvlczduktvhdj' // It's a good practice to store sensitive data securely
    }
  });
  rl.question("please enter your mail ", (userMail) => {
    // Define mail options
    let mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: userMail,
      text: "The world has enough coders; be a coding ninja!",
      subject: "Coding Ninjas",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Success: Email sent to ${userMail}`);
      }
    });
  });
}

export default Solution;
