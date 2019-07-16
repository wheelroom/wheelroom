import { Context } from '../types/context'
import { Field } from '../types/model'

export const getContentType = async (context: Context) => {
  try {
    context.contentfulApi.contentType = await context.contentfulApi.environment.getContentType(
      context.currentModel.model.type
    )
    console.log(
      'Found existing content type',
      context.currentModel.model.type,
      'with version',
      getModelVersion(context.contentfulApi.contentType)
    )
  } catch (error) {
    console.log(
      `Could not find content type ${context.currentModel.model.type}`
    )
    context.contentfulApi.contentType = null
  }
}

export const updateContentType = async (context: Context) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentfulApi.contentType === null) {
    return
  }
  console.log(`Updating content type`)
  context.contentfulApi.contentType.description =
    context.currentModel.model.description
  context.contentfulApi.contentType.displayField =
    context.currentModel.model.displayField
  context.contentfulApi.contentType.fields = getApiFields(context)
  context.contentfulApi.contentType.name = context.currentModel.model.name

  context.contentfulApi.contentType = await context.contentfulApi.contentType.update()
}

export const createContentType = async (context: Context) => {
  // Only create a new one if we it does not exist yet
  if (context.contentfulApi.contentType !== null) {
    return
  }
  console.log(`Creating new content type ${context.currentModel.model.type}`)
  context.contentfulApi.contentType = await context.contentfulApi.environment.createContentTypeWithId(
    context.currentModel.model.type,
    {
      description: context.currentModel.model.description,
      displayField: context.currentModel.model.displayField,
      fields: getApiFields(context),
      name: context.currentModel.model.name,
    }
  )
}

export const publishContentType = async (context: Context) => {
  console.log(`Publishing content type`)
  context.contentfulApi.contentType = await context.contentfulApi.contentType.publish()
}

const getModelVersion = (contentType: any): any => {
  const result = contentType.fields.find((field: any) => {
    return field.id === 'modelVersion'
  })
  return result.name
}

const getApiFields = (context: Context): any[] => {
  const apiFields = []
  Object.entries(context.currentModel.model.fields).forEach(
    ([fieldId, field]: [string, Field]) => {
      console.log(`Adding field ${fieldId}`)
      const apiField = { id: fieldId } as any
      Object.entries(field.specs).forEach(([specName, specValue]) => {
        apiField[specName] = specValue
        // See if we need to handle custom variations
        const modelOptions = context.currentModel.modelOptions
        if (
          modelOptions &&
          modelOptions.variations &&
          fieldId === 'variation' &&
          specName === 'validations'
        ) {
          const existingValue = (specValue as any)[0].in
          const addValues = modelOptions.variations
          const newValue = modelOptions.overwriteVariations
            ? addValues
            : [...addValues, ...existingValue]
          apiField.validations = [
            {
              in: newValue,
            },
          ]
        }
      })
      apiFields.push(apiField)
    }
  )
  // Add model version
  console.log(
    `Setting model version to ${context.currentModel.model.modelVersion}`
  )
  apiFields.push({
    disabled: true,
    id: 'modelVersion',
    localized: false,
    name: context.currentModel.model.modelVersion,
    omitted: false,
    required: false,
    type: 'Symbol',
  })

  return apiFields
}
