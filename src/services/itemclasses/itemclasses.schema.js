// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const itemclassesSchema = {
  $id: 'Itemclasses',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name','category'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    category:ObjectIdSchema()
  }
}
export const itemclassesValidator = getValidator(itemclassesSchema, dataValidator)
export const itemclassesResolver = resolve({})

export const itemclassesExternalResolver = resolve({})

// Schema for creating new data
export const itemclassesDataSchema = {
  $id: 'ItemclassesData',
  type: 'object',
  additionalProperties: false,
  required: ['name','category'],
  properties: {
    ...itemclassesSchema.properties
  }
}
export const itemclassesDataValidator = getValidator(itemclassesDataSchema, dataValidator)
export const itemclassesDataResolver = resolve({})

// Schema for updating existing data
export const itemclassesPatchSchema = {
  $id: 'ItemclassesPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...itemclassesSchema.properties
  }
}
export const itemclassesPatchValidator = getValidator(itemclassesPatchSchema, dataValidator)
export const itemclassesPatchResolver = resolve({})

// Schema for allowed query properties
export const itemclassesQuerySchema = {
  $id: 'ItemclassesQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(itemclassesSchema.properties)
  }
}
export const itemclassesQueryValidator = getValidator(itemclassesQuerySchema, queryValidator)
export const itemclassesQueryResolver = resolve({})
