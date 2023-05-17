// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const itemsSchema = {
  $id: 'Items',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'name','itemClass','description'],
  properties: {
    _id: ObjectIdSchema(),
    name: { type: 'string' },
    itemClass: ObjectIdSchema(),
    description: {type:'string'}
  }
}
export const itemsValidator = getValidator(itemsSchema, dataValidator)
export const itemsResolver = resolve({})

export const itemsExternalResolver = resolve({})

// Schema for creating new data
export const itemsDataSchema = {
  $id: 'ItemsData',
  type: 'object',
  additionalProperties: false,
  required: ['name','itemClass','description'],
  properties: {
    ...itemsSchema.properties
  }
}
export const itemsDataValidator = getValidator(itemsDataSchema, dataValidator)
export const itemsDataResolver = resolve({})

// Schema for updating existing data
export const itemsPatchSchema = {
  $id: 'ItemsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...itemsSchema.properties
  }
}
export const itemsPatchValidator = getValidator(itemsPatchSchema, dataValidator)
export const itemsPatchResolver = resolve({})

// Schema for allowed query properties
export const itemsQuerySchema = {
  $id: 'ItemsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(itemsSchema.properties)
  }
}
export const itemsQueryValidator = getValidator(itemsQuerySchema, queryValidator)
export const itemsQueryResolver = resolve({})
