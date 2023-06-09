// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  shopitemsDataValidator,
  shopitemsPatchValidator,
  shopitemsQueryValidator,
  shopitemsResolver,
  shopitemsExternalResolver,
  shopitemsDataResolver,
  shopitemsPatchResolver,
  shopitemsQueryResolver,
  shopitemsSchema
} from './shopitems.schema.js'
import { ShopitemsService, getOptions } from './shopitems.class.js'
import { shopitemsPath, shopitemsMethods } from './shopitems.shared.js'
import { checkItemId } from './hooks/checkItemId.js'
import { checkShopId } from './hooks/checkShopId.js'
import { setDate } from './hooks/setDate.js'
import { addedBy } from './hooks/setAddedBy.js'
import { incraseQuantity } from './hooks/increaseQuantiy.js'

export * from './shopitems.class.js'
export * from './shopitems.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const shopitems = (app) => {
  // Register our service on the Feathers application
  app.use(shopitemsPath, new ShopitemsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: shopitemsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(shopitemsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(shopitemsExternalResolver),
        schemaHooks.resolveResult(shopitemsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(shopitemsQueryValidator),
        schemaHooks.resolveQuery(shopitemsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        Validate.form(shopitemsSchema, { abortEarly: false }),
        checkItemId(),
        checkShopId(),
        setDate(),
        addedBy(),
        incraseQuantity(),
        schemaHooks.validateData(shopitemsDataValidator),
        schemaHooks.resolveData(shopitemsDataResolver)
      ],
      patch: [
        // Validate.form(shopitemsSchema,{abortEarly:false}),
        // checkItemId(),
        // checkShopId(),
        authenticate('jwt'),
        addedBy(),
        setDate(),
        incraseQuantity(),
        schemaHooks.validateData(shopitemsPatchValidator),
        schemaHooks.resolveData(shopitemsPatchResolver)
      ],
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
