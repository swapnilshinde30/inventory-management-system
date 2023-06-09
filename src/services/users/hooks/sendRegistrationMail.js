import { emailHandler } from '../../../helper/emailHandler.js'

export default function () {
  return (context) => {
    context.data.text = ` Hi ${context.data.firstName} , Your registration is successuful. Your password is ${context.userPass}`
    context.data.subject = 'Registration Successful!'
    emailHandler.sendEmail(context)
  }
}
