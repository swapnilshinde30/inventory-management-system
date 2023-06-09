export const incraseQuantity = () => {
  return async (context) => {
    if (context.data.quantityAddition === undefined) return context
    console.log(context.data.quantityAddition)
    console.log(context.params.id)
    context.data.availableQuantity.amount += context.data.quantityAddition.amount
    return context
  }
}
