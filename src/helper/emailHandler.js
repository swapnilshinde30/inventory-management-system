import nodeMailer from 'nodemailer'

export const emailHandler = {
  sendEmail: async function (context) {
    console.log(context)
    let configuration = {
      service: 'gmail',
      auth: {
        user: process.env.feather_email,
        pass: process.env.feather_pass
      }
    }

    let transporter = nodeMailer.createTransport(configuration)

    let message = {
      from: process.env.feather_email,
      to: context.data.email,
      //subject: 'Registration Successful!',
      //text: `Hi ${context.data.firstName} , Your registration is successuful. Your password is ${context.userPass}` // plain text body
      subject: context.data.subject,
      text: context.data.text
    }
    try {
      const info = await transporter.sendMail(message)
      console.log(info.messageId)
    } catch (err) {
      console.log(err)
    }
  }
}
