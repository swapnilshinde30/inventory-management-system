export const requisitionsPath = 'requisitions'

export const requisitionsMethods = ['find', 'get', 'create', 'patch', 'remove']

export const requisitionsClient = (client) => {
  const connection = client.get('connection')

  client.use(requisitionsPath, connection.service(requisitionsPath), {
    methods: requisitionsMethods
  })
}
