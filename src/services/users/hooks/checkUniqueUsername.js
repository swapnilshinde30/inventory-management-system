export const checkUniqueUsername = () => {
  return async (context) => {
    const userService = context.app.service('users')
    const user = await userService.find({ query: { userName: context.data.userName } })
    console.log(user)
    if (user.total > 0) throw new Error('UserName is already present')
    return context
  }
}
