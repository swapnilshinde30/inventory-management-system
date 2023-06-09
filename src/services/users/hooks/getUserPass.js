export default function () {
  return (context) => {
    const userPass = context.data.password
    context.userPass = userPass
  }
}
