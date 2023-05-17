// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  shopsDataValidator,
  shopsPatchValidator,
  shopsQueryValidator,
  shopsResolver,
  shopsExternalResolver,
  shopsDataResolver,
  shopsPatchResolver,
  shopsQueryResolver,
  shopsSchema
} from './shops.schema.js'
import { ShopsService, getOptions } from './shops.class.js'
import { shopsPath, shopsMethods } from './shops.shared.js'
import { checkCategoryId } from './hooks/checkCategoryId.js'
import { checkOwnerId } from './hooks/checkOwnerId.js'
import { setShopId } from './hooks/setShopId.js'

export * from './shops.class.js'
export * from './shops.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const shops = (app) => {
  // Register our service on the Feathers application
  app.use(shopsPath, new ShopsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: shopsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(shopsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(shopsExternalResolver),
        schemaHooks.resolveResult(shopsResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(shopsQueryValidator), schemaHooks.resolveQuery(shopsQueryResolver)],
      find: [],
      get: [],
      create: [
        Validate.form(shopsSchema,{abortEarly:false}),
        checkCategoryId(),checkOwnerId(),setShopId(),
        schemaHooks.validateData(shopsDataValidator), schemaHooks.resolveData(shopsDataResolver)],
      patch: [
        Validate.form(shopsSchema,{abortEarly:false}),
        schemaHooks.validateData(shopsPatchValidator), schemaHooks.resolveData(shopsPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
