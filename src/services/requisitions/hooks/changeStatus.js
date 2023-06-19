import sendEmailForQuantity from './sendEmailForQuantity.js'

export const changeStatus = () => {
  return async (context) => {
    //console.log(context.params.id)
    if (context.data.status === 'dispatched') {
      console.log('in dispatched')
      const shopItemId = context.data.shopItem
      const shopItemService = context.app.service('shopitems')
      const shopItem = await shopItemService.get(shopItemId)
      console.log(shopItem.availableQuantity.amount)
      let availableQuantity = {}
      availableQuantity.amount = shopItem.availableQuantity.amount - context.data.requiredQuantity.amount
      availableQuantity.unit = context.data.requiredQuantity.unit
      console.log(availableQuantity)
      const item = await shopItemService.patch(shopItem._id, {
        availableQuantity
      })
    }

    // if (context.data.status === 'cancelled') {
    //   if (!context.data.cancellationReason) throw new Error('Cancellation Reason is not given!')
    // }
    return context
  }
}
