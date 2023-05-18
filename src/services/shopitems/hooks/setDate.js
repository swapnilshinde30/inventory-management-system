export const setDate=()=>{
    return async(context)=>{
      context.data.quantityAddition.date=new Date();
      return context;
    }
}