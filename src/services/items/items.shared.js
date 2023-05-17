export const itemsPath = 'items'

export const itemsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const itemsClient = (client) => {
  const connection = client.get('connection')

  client.use(itemsPath, connection.service(itemsPath), {
    methods: itemsMethods
  })
}
