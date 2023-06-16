export const checkStock = () => {
  return async (context) => {
    const shopItemId = context.data.shopItem
    const shopItemService = context.app.service('shopitems')
    const shopItem = await shopItemService.get(shopItemId)
    console.log(shopItem)
    if (shopItem.availableQuantity.amount < context.data.requiredQuantity.amount)
      throw new Error('No sufficient Quantity')
    return context
  }
}
