// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import { otpAuthenticationClient } from './services/otp-authentication/otp-authentication.shared.js'

import { forgotPasswordClient } from './services/forgotPassword/forgotPassword.shared.js'

import { sendMailClient } from './services/sendMail/sendMail.shared.js'

import { sendMailClient } from './services/sendMail/sendMail.shared.js'

import { requisitionsClient } from './services/requisitions/requisitions.shared.js'

import { shopitemsClient } from './services/shopitems/shopitems.shared.js'

import { itemsClient } from './services/items/items.shared.js'

import { itemclassesClient } from './services/itemclasses/itemclasses.shared.js'

import { shopsClient } from './services/shops/shops.shared.js'

import { categoriesClient } from './services/categories/categories.shared.js'

import { userClient } from './services/users/users.shared.js'

/**
 * Returns a  client for the inventory-management-system app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = (connection, authenticationOptions = {}) => {
  const client = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(userClient)

  client.configure(categoriesClient)

  client.configure(itemclassesClient)

  client.configure(shopsClient)

  client.configure(itemsClient)

  client.configure(shopitemsClient)

  client.configure(requisitionsClient)

  client.configure(sendMailClient)

  client.configure(sendMailClient)

  client.configure(forgotPasswordClient)

  client.configure(otpAuthenticationClient)

  return client
}
