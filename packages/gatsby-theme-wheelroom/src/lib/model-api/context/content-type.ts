import { Context } from '../../types/context'
import { Field } from '../../types/model'

export const getContentType = async (context: Context) => {
  try {
    context.contentType = await context.environment.getContentType(
      context.currentModel.type
    )
    console.log(
      'Found existing content type',
      context.currentModel.type,
      'with version',
      getModelVersion(context.contentType)
    )
  } catch (error) {
    console.log('Could not find content type', context.currentModel.type)
    context.contentType = null
  }
}

export const updateContentType = async (context: Context) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentType === null) {
    return
  }
  console.log('Updating content type')
  context.contentType.description = context.currentModel.description
  context.contentType.displayField = context.currentModel.displayField
  context.contentType.fields = getApiFields(context)
  context.contentType.name = context.currentModel.name

  context.contentType = await context.contentType.update()
}

export const createContentType = async (context: Context) => {
  // Only create a new one if we it does not exist yet
  if (context.contentType !== null) {
    return
  }
  console.log('Creating new content type', context.currentModel.type)
  context.contentType = await context.environment.createContentTypeWithId(
    context.currentModel.type,
    {
      description: context.currentModel.description,
      displayField: context.currentModel.displayField,
      fields: getApiFields(context),
      name: context.currentModel.name,
    }
  )
}

export const publishContentType = async (context: Context) => {
  console.log('Publishing content type')
  context.contentType = await context.contentType.publish()
}

const getModelVersion = (contentType: any): any => {
  const result = contentType.fields.find(field => {
    return field.id === 'modelVersion'
  })
  return result.name
}

const getApiFields = (context: Context): any[] => {
  const apiFields = []
  Object.entries(context.currentModel.fields).forEach(
    ([fieldId, field]: [string, Field]) => {
      console.log('Adding field', fieldId)
      const apiField = { id: fieldId }
      Object.entries(field.specs).forEach(([specName, specValue]) => {
        apiField[specName] = specValue
      })
      apiFields.push(apiField)
    }
  )
  // Add model version
  console.log('Setting model version to', context.currentModel.modelVersion)
  apiFields.push({
    disabled: true,
    id: 'modelVersion',
    localized: false,
    name: context.currentModel.modelVersion,
    omitted: false,
    required: false,
    type: 'Symbol',
  })

  return apiFields
}
