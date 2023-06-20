export const otpAuthenticationPath = 'otp-authentication'

export const otpAuthenticationMethods = ['create']

export const otpAuthenticationClient = (client) => {
  const connection = client.get('connection')

  client.use(otpAuthenticationPath, connection.service(otpAuthenticationPath), {
    methods: otpAuthenticationMethods
  })
}
