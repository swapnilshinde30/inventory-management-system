export const itemclassesPath = 'itemclasses'

export const itemclassesMethods = ['find', 'get', 'create', 'patch', 'remove']

export const itemclassesClient = (client) => {
  const connection = client.get('connection')

  client.use(itemclassesPath, connection.service(itemclassesPath), {
    methods: itemclassesMethods
  })
}
