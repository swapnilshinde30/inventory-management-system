export const setDate = () => {
  return async (context) => {
    // if (context.params.user.role === 'shopkeeper' && context.data.quantityAddition)
    //   context.data.quantityAddition.date = new Date()
    context.data.quantityAddition.date = new Date()

    return context
  }
}
