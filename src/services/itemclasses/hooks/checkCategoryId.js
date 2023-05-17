export const checkCategoryId=()=>{
    return async(context)=>{
       const categoryService=context.app.service('categories');
       const category=await categoryService.get(context.data.category)
       if(!category) throw new Error('category with given Id is not present in db.')
       return context;
    }
}

