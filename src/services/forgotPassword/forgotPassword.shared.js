export const forgotPasswordPath = 'forgotPassword'

export const forgotPasswordMethods = ['find', 'get', 'create', 'patch', 'remove']

export const forgotPasswordClient = (client) => {
  const connection = client.get('connection')

  client.use(forgotPasswordPath, connection.service(forgotPasswordPath), {
    methods: forgotPasswordMethods
  })
}
