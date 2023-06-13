// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'
import Validate from 'feathers-validate-joi'
import { userSchema } from './users.model.js'

import { hooks as schemaHooks } from '@feathersjs/schema'
import {
  userDataValidator,
  userPatchValidator,
  userQueryValidator,
  userResolver,
  userExternalResolver,
  userDataResolver,
  userPatchResolver,
  userQueryResolver
} from './users.schema.js'
import { UserService, getOptions } from './users.class.js'
import { userPath, userMethods } from './users.shared.js'
import { checkUniqueUsername } from './hooks/checkUniqueUsername.js'
import { updatedBy } from './hooks/updatedBy.js'
import { softDeleteUser } from './hooks/softDeleteUser.js'
import getUserPass from './hooks/getUserPass.js'
import sendRegistrationMail from './hooks/sendRegistrationMail.js'

export * from './users.class.js'
export * from './users.schema.js'

// A configure function that registers the service and its hooks via `app.configure`
export const user = (app) => {
  // Register our service on the Feathers application
  app.use(userPath, new UserService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: userMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(userPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(userExternalResolver), schemaHooks.resolveResult(userResolver)],
      find: [
        //authenticate('jwt')
      ],
      get: [
        //authenticate('jwt')
      ],
      create: [],
      update: [
        //authenticate('jwt')
      ],
      patch: [
        //authenticate('jwt')
      ],
      remove: [
        //authenticate('jwt')
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(userQueryValidator), schemaHooks.resolveQuery(userQueryResolver)],
      find: [],
      get: [],
      create: [
        Validate.form(userSchema, { abortEarly: false }),
        getUserPass(),
        checkUniqueUsername(),
        schemaHooks.validateData(userDataValidator),
        schemaHooks.resolveData(userDataResolver)
      ],

      patch: [
        // Validate.form(userSchema, { abortEarly: false }),
        updatedBy(),
        softDeleteUser(),
        schemaHooks.validateData(userPatchValidator),
        schemaHooks.resolveData(userPatchResolver)
      ],
      remove: []
    },
    after: {
      all: [],
      create: [sendRegistrationMail()]
    },
    error: {
      all: []
    }
  })
}
