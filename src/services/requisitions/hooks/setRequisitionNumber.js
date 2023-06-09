export const setRequisitionNumber = () => {
  return async (context) => {
    const shopItemsService = context.app.service('shopitems')
    const shopItem = await shopItemsService.get(context.data.shopItem)
    const shopService = context.app.service('shops')
    const shop = await shopService.get(shopItem.shop)
    const randomString = Math.random().toString(36).substring(2, 6)

    context.data.requisitionNumber = shop.shopId + randomString

    return context.data.requisitionNumber
  }
}
