export const checkOwnerId = () => {
  return async (context) => {
    console.log(context.params.user)
    // const userId = context.data.owner
    // const userService = context.app.service('users')
    // const user = await userService.get(userId)
    // if (!user) throw new Error('user not found')
    //use this only
    //context.data.owner = context.params.user._id
    context.data.owner = '6482c2a69e19849081d26aef'
    return context
  }
}
