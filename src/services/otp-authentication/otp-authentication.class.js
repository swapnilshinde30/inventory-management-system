// This is a skeleton for a custom service class. Remove or add the methods you need here
import nodemailer from 'nodemailer'
export class OtpAuthenticationService {
  constructor(options) {
    this.options = options
  }
  setup(app) {
    this.app = app
  }

  async create(data) {
    const result = {}
    const user = process.env.feather_email
    const pass = process.env.feather_pass
    console.log(data.email)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass
      }
    })
    try {
      const info = await transporter.sendMail({
        from: user, // sender address
        to: data.email, // list of receivers
        subject: 'OTP to reset ur password', // Subject line
        text: 'Mail for OTP', // plain text body
        html: `<h3>Please Enter This OTP to Reset Your Password</h3>
              <h4>${data.otp}</h4>
              <h4>OTP only valid for 5mins </h4>` // html body
      })
      console.log('Message sent: %s', info.messageId)
      result.msg = 'Check your mail for OTP'
    } catch (err) {
      console.log('here')
      console.log(err)
      result.msg = 'Could not send mail'
    }
    return result
  }
}

export const getOptions = (app) => {
  return { app }
}
