// This is a skeleton for a custom service class. Remove or add the methods you need here
export class ForgotPasswordService {
  constructor(options) {
    this.options = options
  }
  setup(app) {
    this.app = app
  }
  async create(data) {
    const result = {}
    let userService = this.app.service(`users`)
    const user = await userService.get(null, { query: { userName: data.userName } })
    console.log(user)
    if (data.newPassword === data.confirmPassword) {
      const User = await userService.patch(user._id, { password: data.newPassword })
      console.log('Password Changed')
      result.msg = 'Password changed successfully'
    } else {
      result.msg = 'Password does not match'
    }
    return result
  }
}

export const getOptions = (app) => {
  return { app }
}
