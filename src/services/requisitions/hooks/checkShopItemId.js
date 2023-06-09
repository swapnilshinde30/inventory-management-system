export const checkShopItemId = () => {
  return async (context) => {
    const shopItemId = context.data.shopItem
    const shopItemService = context.app.service('shopitems')
    const shopItem = await shopItemService.get(shopItemId)
    if (!shopItem) throw new Error('shopitem not found')
    //   console.log(shopItem)

    return context
  }
}
