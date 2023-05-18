export const checkShopId=()=>{
    return async(context)=>{
        const shopsService=context.app.service('shops');
        const shop=await shopsService.get(context.data.shop);
        if(!shop) throw new Error('Shop with given Id is not present in db..')
        return context;
    }
}