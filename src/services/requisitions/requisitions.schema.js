// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const requisitionsSchema = {
  $id: 'Requisitions',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'shopItem','requireQuantity','preferedDeliveryDate'],
  properties: {
    _id: ObjectIdSchema(),
    shopItem:ObjectIdSchema(),
    requireQuantity:{
      type:'object',
      properties:{
           amount:{type:'number'},
           unit:{type:'number'}
      }
    },
    preferedDeliveryDate:{type:'object'},
    requisitionNumber:{type:'string'},
    status: { type: 'string' },
    cancellationReason: { type: 'string' }
  }
}
export const requisitionsValidator = getValidator(requisitionsSchema, dataValidator)
export const requisitionsResolver = resolve({})

export const requisitionsExternalResolver = resolve({})

// Schema for creating new data
export const requisitionsDataSchema = {
  $id: 'RequisitionsData',
  type: 'object',
  additionalProperties: false,
  required: ['shopItem','requireQuantity','preferedDeliveryDate'],
  properties: {
    ...requisitionsSchema.properties
  }
}
export const requisitionsDataValidator = getValidator(requisitionsDataSchema, dataValidator)
export const requisitionsDataResolver = resolve({})

// Schema for updating existing data
export const requisitionsPatchSchema = {
  $id: 'RequisitionsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...requisitionsSchema.properties
  }
}
export const requisitionsPatchValidator = getValidator(requisitionsPatchSchema, dataValidator)
export const requisitionsPatchResolver = resolve({})

// Schema for allowed query properties
export const requisitionsQuerySchema = {
  $id: 'RequisitionsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(requisitionsSchema.properties)
  }
}
export const requisitionsQueryValidator = getValidator(requisitionsQuerySchema, queryValidator)
export const requisitionsQueryResolver = resolve({})
