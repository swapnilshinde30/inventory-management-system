// For more information about this file see https://dove.feathersjs.com/guides/cli/service.schemas.html
import { resolve, getValidator, querySyntax } from '@feathersjs/schema'
import { ObjectIdSchema } from '@feathersjs/schema'
import { dataValidator, queryValidator } from '../../validators.js'

// Main data model schema
export const shopitemsSchema = {
  $id: 'Shopitems',
  type: 'object',
  additionalProperties: false,
  required: ['_id', 'shop','item','quantityAddition','availableQuantity'],
  properties: {
    _id: ObjectIdSchema(),
    shop:ObjectIdSchema(),
    item:ObjectIdSchema(),
    quantityAddition:{
      type:'object',
      properties:{
       amount:{type:'number'},
       unit:{type:'string'},
       date:{type:'object'},
       addedBy:ObjectIdSchema()
      },
    },
    availableQuantity:{
      type:'object',
      properties:{
        amount:{type:'number'},
        unit:{type:'string'}
      },
    }
  }
}
export const shopitemsValidator = getValidator(shopitemsSchema, dataValidator)
export const shopitemsResolver = resolve({})

export const shopitemsExternalResolver = resolve({})

// Schema for creating new data
export const shopitemsDataSchema = {
  $id: 'ShopitemsData',
  type: 'object',
  additionalProperties: false,
  required: ['shop','item','quantityAddition','availableQuantity'],
  properties: {
    ...shopitemsSchema.properties
  }
}
export const shopitemsDataValidator = getValidator(shopitemsDataSchema, dataValidator)
export const shopitemsDataResolver = resolve({})

// Schema for updating existing data
export const shopitemsPatchSchema = {
  $id: 'ShopitemsPatch',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    ...shopitemsSchema.properties
  }
}
export const shopitemsPatchValidator = getValidator(shopitemsPatchSchema, dataValidator)
export const shopitemsPatchResolver = resolve({})

// Schema for allowed query properties
export const shopitemsQuerySchema = {
  $id: 'ShopitemsQuery',
  type: 'object',
  additionalProperties: false,
  properties: {
    ...querySyntax(shopitemsSchema.properties)
  }
}
export const shopitemsQueryValidator = getValidator(shopitemsQuerySchema, queryValidator)
export const shopitemsQueryResolver = resolve({})
