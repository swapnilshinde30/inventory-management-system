// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  requisitionsDataValidator,
  requisitionsPatchValidator,
  requisitionsQueryValidator,
  requisitionsResolver,
  requisitionsExternalResolver,
  requisitionsDataResolver,
  requisitionsPatchResolver,
  requisitionsQueryResolver,
  requisitionsSchema
} from './requisitions.schema.js'
import { RequisitionsService, getOptions } from './requisitions.class.js'
import { requisitionsPath, requisitionsMethods } from './requisitions.shared.js'
import { checkShopItemId } from './hooks/checkShopItemId.js'
import { setRequisitionNumber } from './hooks/setRequisitionNumber.js'

export * from './requisitions.class.js'
export * from './requisitions.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const requisitions = (app) => {
  // Register our service on the Feathers application
  app.use(requisitionsPath, new RequisitionsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: requisitionsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(requisitionsPath).hooks({
    around: {
      all: [
        authenticate('jwt'),
        schemaHooks.resolveExternal(requisitionsExternalResolver),
        schemaHooks.resolveResult(requisitionsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(requisitionsQueryValidator),
        schemaHooks.resolveQuery(requisitionsQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        Validate.form(requisitionsSchema,{abortEarly:false}),
        checkShopItemId(),
        setRequisitionNumber(),
        schemaHooks.validateData(requisitionsDataValidator),
        schemaHooks.resolveData(requisitionsDataResolver)
      ],
      patch: [
        Validate.form(requisitionsSchema,{abortEarly:false}),
        schemaHooks.validateData(requisitionsPatchValidator),
        schemaHooks.resolveData(requisitionsPatchResolver)
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
