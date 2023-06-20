// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  otpAuthenticationDataValidator,
  otpAuthenticationPatchValidator,
  otpAuthenticationQueryValidator,
  otpAuthenticationResolver,
  otpAuthenticationExternalResolver,
  otpAuthenticationDataResolver,
  otpAuthenticationPatchResolver,
  otpAuthenticationQueryResolver
} from './otp-authentication.schema.js'
import { OtpAuthenticationService, getOptions } from './otp-authentication.class.js'
import { otpAuthenticationPath, otpAuthenticationMethods } from './otp-authentication.shared.js'

export * from './otp-authentication.class.js'
export * from './otp-authentication.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const otpAuthentication = (app) => {
  // Register our service on the Feathers application
  app.use(otpAuthenticationPath, new OtpAuthenticationService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: otpAuthenticationMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(otpAuthenticationPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(otpAuthenticationExternalResolver),
        schemaHooks.resolveResult(otpAuthenticationResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(otpAuthenticationQueryValidator),
        schemaHooks.resolveQuery(otpAuthenticationQueryResolver)
      ],
      create: [
        schemaHooks.validateData(otpAuthenticationDataValidator),
        schemaHooks.resolveData(otpAuthenticationDataResolver)
      ]
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
