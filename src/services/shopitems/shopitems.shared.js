export const shopitemsPath = 'shopitems'

export const shopitemsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const shopitemsClient = (client) => {
  const connection = client.get('connection')

  client.use(shopitemsPath, connection.service(shopitemsPath), {
    methods: shopitemsMethods
  })
}
