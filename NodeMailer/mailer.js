const mailer = require('nodemailer');

const sendMail = async () => {
    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sanketpadole1@gmail.com',
            pass: 'tthm cmbz atqv avgk'
        }
    })

    const mailoption = {
        from: 'sanketpadole1@gmail.com',
        to: 'sanket.21910973@viit.ac.in',
        subject: 'Trying the nodemailer module.',
        text: "audited 2 packages in 3s found 0 vulnerabilities PS C:\Users\sanke\Desktop\NodeJS\NodeMailer> "

    }

    const result = await transport.sendMail(mailoption)
    console.log(result)
}
sendMail();