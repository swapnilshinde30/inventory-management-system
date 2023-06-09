export const softDeleteUser = () => {
  return async (context) => {
    if (context.data.isActive) context.data.isActive = false
    return context
  }
}
