const nodemailer = require('nodemailer'),
    fs = require('fs')

const sendEmail =() => {
    try {
        const data = fs.readFileSync('logs/logs.txt', 'utf-8')
        const msg = {
            from: 'elonmusk@tesla.com',
            to: 'rahilrehan@test.com',
            subject: 'Logs for rest calculator api, final2',
            text: data
        }
        let transport = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: '56837baaa147b6',
                pass: '3f96dfe229f041'
            }
        })
        transport.sendMail(msg)
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`)
    }
}

sendEmail()