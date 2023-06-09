export const setShopId = () => {
  return async (context) => {
    const firstFourLetter = context.data.name.slice(0, 4).toUpperCase()
    const lastFourRandomDigit = Math.floor(Math.random() * 9000 + 1000)
    context.data.shopId = firstFourLetter + lastFourRandomDigit
    return context
  }
}
