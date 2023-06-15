// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  forgotPasswordDataValidator,
  forgotPasswordPatchValidator,
  forgotPasswordQueryValidator,
  forgotPasswordResolver,
  forgotPasswordExternalResolver,
  forgotPasswordDataResolver,
  forgotPasswordPatchResolver,
  forgotPasswordQueryResolver
} from './forgotPassword.schema.js'
import { ForgotPasswordService, getOptions } from './forgotPassword.class.js'
import { forgotPasswordPath, forgotPasswordMethods } from './forgotPassword.shared.js'

export * from './forgotPassword.class.js'
export * from './forgotPassword.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const forgotPassword = (app) => {
  // Register our service on the Feathers application
  app.use(forgotPasswordPath, new ForgotPasswordService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: forgotPasswordMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(forgotPasswordPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(forgotPasswordExternalResolver),
        schemaHooks.resolveResult(forgotPasswordResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(forgotPasswordQueryValidator),
        schemaHooks.resolveQuery(forgotPasswordQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(forgotPasswordDataValidator),
        schemaHooks.resolveData(forgotPasswordDataResolver)
      ],
      patch: [
        schemaHooks.validateData(forgotPasswordPatchValidator),
        schemaHooks.resolveData(forgotPasswordPatchResolver)
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
