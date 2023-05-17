export const checkOwnerId =()=>{
    return async(context)=>{
        const userId = context.data.owner;
        const userService = context.app.service('users');
        const user = await userService.get(userId);
        if (!user) throw new Error ("user not found");
        return context;
    }
}