export const lastLogIn = (app) => {
  app.on('login', (data) => {
    data.user['lastLoggedIn'] = new Date()
    app.service('users').patch(data.user._id, { lastLoggedIn: data.user['lastLoggedIn'] })
  })
}
