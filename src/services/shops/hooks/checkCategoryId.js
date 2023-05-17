export const checkCategoryId =()=>{
    return async(context)=>{
        const categoryId = context.data.category;
        const categoryService = context.app.service('categories');
        const category = await categoryService.get(categoryId);
        if(!category) throw new Error("category with given category id is not found in db")
        return context;
            
        }
    }