import { emailHandler } from '../../../helper/emailHandler.js'

export default function () {
  return async (context) => {
    const shopItemId = context.data.shopItem
    const shopItemService = context.app.service('shopitems')
    const shopItem = await shopItemService.get(shopItemId)
    console.log(shopItem)
    if (shopItem.availableQuantity.amount < 5) {
      const userId = shopItem.quantityAddition.addedBy
      //for shopkeeper email
      const userService = context.app.service('users')
      const user = await userService.get(userId)
      context.data.email = user.email

      //for item name
      const itemId = shopItem.item
      const itemService = context.app.service('items')
      const item = await itemService.get(itemId)

      context.data.subject = 'Add Quantity!!!'
      context.data.text = `Available quantity of item ${item.name} is only ${shopItem.availableQuantity.amount}${shopItem.availableQuantity.unit}. Please Restock it.`
      emailHandler.sendEmail(context)
    }
    return context
  }
}
