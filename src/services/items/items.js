// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'
import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  itemsDataValidator,
  itemsPatchValidator,
  itemsQueryValidator,
  itemsResolver,
  itemsExternalResolver,
  itemsDataResolver,
  itemsPatchResolver,
  itemsQueryResolver
} from './items.schema.js'
import { ItemsService, getOptions } from './items.class.js'
import { itemsPath, itemsMethods } from './items.shared.js'
import { checkItemClassId } from './hooks/checkItemClassId.js'
import { itemSchema } from './items.model.js'

export * from './items.class.js'
export * from './items.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const items = (app) => {
  // Register our service on the Feathers application
  app.use(itemsPath, new ItemsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: itemsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(itemsPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(itemsExternalResolver), schemaHooks.resolveResult(itemsResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(itemsQueryValidator), schemaHooks.resolveQuery(itemsQueryResolver)],
      find: [],
      get: [],
      create: [
        Validate.form(itemSchema, { abortEarly: false }),
        checkItemClassId(),
        schemaHooks.validateData(itemsDataValidator),
        schemaHooks.resolveData(itemsDataResolver)
      ],
      update: [
        authenticate('jwt'),
        Validate.form(itemSchema, { abortEarly: false }),
        schemaHooks.validateData(itemsPatchValidator),
        schemaHooks.resolveData(itemsPatchResolver)
      ],
      patch: [
        authenticate('jwt'),
        schemaHooks.validateData(itemsPatchValidator),
        schemaHooks.resolveData(itemsPatchResolver)
      ],
      remove: [authenticate('jwt')]
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
