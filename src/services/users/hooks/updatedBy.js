export const updatedBy = () => {
  return async (context) => {
    if (context.params.user) {
      context.data.updatedBy = context.params.user._id
      context.data.updatedAt = new Date()
    }
    return context
  }
}
