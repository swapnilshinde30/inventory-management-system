export const checkShopId=()=>{
    return async(context)=>{
         const shopService=context.app.service("shops");
         const shop=await shopService.get(context.data.shop);
         console.log(shop);
         if(!shop) throw new Error("ShopId with given Id is not present in db.")

         return context;
    }
}