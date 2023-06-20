// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const shopsSchema = {
  $id: 'Shops',
  type: 'object',
  additionalProperties: false,
  required: [
    '_id',
    'name',
    'shopId',
    'addressLine1',
    'addressLine2',
    'area',
    'city',
    'state',
    'zipcode',
    'category',
    'owner',
    'contactPerson'
  ],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    shopId: { type: 'string' },
    addressLine1: { type: 'string' },
    addressLine2: { type: 'string' },
    area: { type: 'string' },
    city: { type: 'string' },
    state: { type: 'string' },
    zipcode: { type: 'string' },
    category: ObjectIdSchema(),
    owner: ObjectIdSchema(),
    contactPerson: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        phone: { type: 'string' }
      }
    }
  }
}
export const shopsValidator = getValidator(shopsSchema, dataValidator)
export const shopsResolver = resolve({})

export const shopsExternalResolver = resolve({})

// Schema for creating new data
export const shopsDataSchema = {
  $id: 'ShopsData',
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
    'shopId',
    'addressLine1',
    'addressLine2',
    'area',
    'city',
    'state',
    'zipcode',
    'category',
    'owner',
    'contactPerson'
  ],
  properties: {
    ...shopsSchema.properties
  }
}
export const shopsDataValidator = getValidator(shopsDataSchema, dataValidator)
export const shopsDataResolver = resolve({})

// Schema for updating existing data
export const shopsPatchSchema = {
  $id: 'ShopsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...shopsSchema.properties
  }
}
export const shopsPatchValidator = getValidator(shopsPatchSchema, dataValidator)
export const shopsPatchResolver = resolve({})

// Schema for allowed query properties
export const shopsQuerySchema = {
  $id: 'ShopsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shopsSchema.properties)
  }
}
export const shopsQueryValidator = getValidator(shopsQuerySchema, queryValidator)
export const shopsQueryResolver = resolve({})
