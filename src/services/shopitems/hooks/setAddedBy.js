export const addedBy = () => {
  return async (context) => {
    console.log(context.params)
    if (context.params.user) {
      //  context.data.quantityAddition.addedBy = context.params.user._id
      context.data.quantityAddition.date = new Date()
    }
    return context
  }
}
