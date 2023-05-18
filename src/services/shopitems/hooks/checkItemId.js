export const checkItemId=()=>{
    return async(context)=>{
         const itemService=context.app.service("items");
         const item=await itemService.get(context.data.item);
         if(!item) throw new Error("ItemId with given Id is not present in db.");
         return context;
    }
}