import { itemclasses } from './itemclasses/itemclasses.js'

import { categories } from './categories/categories.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(itemclasses)

  app.configure(categories)

  app.configure(user)

  // All services will be registered here
}
