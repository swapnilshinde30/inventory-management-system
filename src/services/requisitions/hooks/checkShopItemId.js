export const checkShopItemId=()=>{
    return async (context)=>{
        const shopItemId = context.data.shopItem;
        const shopItemService = context.app.service('shopitems')
        const shopItems =await shopItemService.get(shopItemId);
        if(!shopItems) throw new Error('shopitem not found');
        return context
    }
}