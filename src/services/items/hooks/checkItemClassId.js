export const checkItemClassId =()=>{
    return async (context)=>{
        const itemClassService = context.app.service('itemclasses');
        const itemClass = await itemClassService.get(context.data.itemClass);
        if(!itemClass) throw new Error("itemclass with given id not present in db")
        return context
    }
}