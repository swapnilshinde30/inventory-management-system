import { forgotPassword } from './forgotPassword/forgotPassword.js'

import { requisitions } from './requisitions/requisitions.js'

import { shopitems } from './shopitems/shopitems.js'

import { items } from './items/items.js'

import { itemclasses } from './itemclasses/itemclasses.js'

import { shops } from './shops/shops.js'

import { categories } from './categories/categories.js'

import { user } from './users/users.js'

export const services = (app) => {
  app.configure(forgotPassword)

  app.configure(requisitions)

  app.configure(shopitems)

  app.configure(items)

  app.configure(itemclasses)

  app.configure(shops)

  app.configure(categories)

  app.configure(user)

  // All services will be registered here
}
