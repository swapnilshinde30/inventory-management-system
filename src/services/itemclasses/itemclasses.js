// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  itemclassesDataValidator,
  itemclassesPatchValidator,
  itemclassesQueryValidator,
  itemclassesResolver,
  itemclassesExternalResolver,
  itemclassesDataResolver,
  itemclassesPatchResolver,
  itemclassesQueryResolver
} from './itemclasses.schema.js'
import { ItemclassesService, getOptions } from './itemclasses.class.js'
import { itemclassesPath, itemclassesMethods } from './itemclasses.shared.js'
import { checkCategoryId } from './hooks/checkCategoryId.js'
import { itemclassSchema } from './itemclasses.model.js'

export * from './itemclasses.class.js'
export * from './itemclasses.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const itemclasses = (app) => {
  // Register our service on the Feathers application
  app.use(itemclassesPath, new ItemclassesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: itemclassesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(itemclassesPath).hooks({
    around: {
      all: [
        //   authenticate('jwt'),
        schemaHooks.resolveExternal(itemclassesExternalResolver),
        schemaHooks.resolveResult(itemclassesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(itemclassesQueryValidator),
        schemaHooks.resolveQuery(itemclassesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        Validate.form(itemclassSchema, { abortEarly: false }),
        checkCategoryId(),
        schemaHooks.validateData(itemclassesDataValidator),
        schemaHooks.resolveData(itemclassesDataResolver)
      ],
      update: [
        Validate.form(itemclassSchema, { abortEarly: false }),
        checkCategoryId(),
        schemaHooks.validateData(itemclassesPatchValidator),
        schemaHooks.resolveData(itemclassesPatchResolver)
      ],
      patch: [
        checkCategoryId(),
        schemaHooks.validateData(itemclassesPatchValidator),
        schemaHooks.resolveData(itemclassesPatchResolver)
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
