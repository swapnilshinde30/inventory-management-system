// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const otpAuthenticationSchema = {
  $id: 'OtpAuthentication',
  type: 'object',
  additionalProperties: false,
  required: ['id', 'otp', 'email'],
  properties: {
    id: { type: 'number' },
    otp: { type: 'number' },
    email: { type: 'string' }
  }
}
export const otpAuthenticationValidator = getValidator(otpAuthenticationSchema, dataValidator)
export const otpAuthenticationResolver = resolve({})

export const otpAuthenticationExternalResolver = resolve({})

// Schema for creating new data
export const otpAuthenticationDataSchema = {
  $id: 'OtpAuthenticationData',
  type: 'object',
  additionalProperties: false,
  required: ['otp', 'email'],
  properties: {
    ...otpAuthenticationSchema.properties
  }
}
export const otpAuthenticationDataValidator = getValidator(otpAuthenticationDataSchema, dataValidator)
export const otpAuthenticationDataResolver = resolve({})

// Schema for updating existing data
export const otpAuthenticationPatchSchema = {
  $id: 'OtpAuthenticationPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...otpAuthenticationSchema.properties
  }
}
export const otpAuthenticationPatchValidator = getValidator(otpAuthenticationPatchSchema, dataValidator)
export const otpAuthenticationPatchResolver = resolve({})

// Schema for allowed query properties
export const otpAuthenticationQuerySchema = {
  $id: 'OtpAuthenticationQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(otpAuthenticationSchema.properties)
  }
}
export const otpAuthenticationQueryValidator = getValidator(otpAuthenticationQuerySchema, queryValidator)
export const otpAuthenticationQueryResolver = resolve({})
