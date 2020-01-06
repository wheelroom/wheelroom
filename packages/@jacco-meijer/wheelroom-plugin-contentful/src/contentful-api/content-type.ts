import { ContentfulComponent } from '../types/contentful-components'
import { ContentfulField } from '../types/contentful-fields'
import { Context } from '../types/context'

export const getContentType = async (
  context: Context,
  componentName: string
) => {
  const component = context.contentfulComponents[componentName]
  try {
    context.contentfulApi.contentType = await context.contentfulApi.environment.getContentType(
      component.type
    )
    console.log(
      'Found existing content type',
      component.type,
      'with version',
      getModelVersion(context.contentfulApi.contentType)
    )
  } catch (error) {
    console.log(`Could not find content type ${component.type}`)
    context.contentfulApi.contentType = null
  }
}

export const updateContentType = async (
  context: Context,
  componentName: string
) => {
  const component = context.contentfulComponents[componentName]
  // If we don't have a contentType there's nothing to do here
  if (context.contentfulApi.contentType === null) {
    return
  }
  console.log(`Updating content type`)
  context.contentfulApi.contentType.description = component.description
  context.contentfulApi.contentType.displayField = component.displayField
  context.contentfulApi.contentType.fields = getApiFields(
    context,
    componentName
  )
  context.contentfulApi.contentType.name = componentName
  context.contentfulApi.contentType = await context.contentfulApi.contentType.update()
}

export const createContentType = async (
  context: Context,
  componentName: string
) => {
  const component = context.contentfulComponents[componentName]
  // Only create a new one if we it does not exist yet
  if (context.contentfulApi.contentType !== null) {
    return
  }
  console.log(`Creating new content type ${component.type}`)
  context.contentfulApi.contentType = await context.contentfulApi.environment.createContentTypeWithId(
    component.type,
    {
      description: component.description,
      displayField: component.displayField,
      fields: getApiFields(context, componentName),
      name: componentName,
    }
  )
}

export const publishContentType = async (
  context: Context,
  componentName: string
) => {
  console.log(`Publishing content type`)
  context.contentfulApi.contentType = await context.contentfulApi.contentType.publish()
}

const getModelVersion = (contentType: any): any => {
  const result = contentType.fields.find((field: any) => {
    return field.id === 'modelVersion'
  })
  return result.name
}

export const getLocalizedField = (
  fieldId: string,
  modelOptions: any
): boolean => {
  if (
    modelOptions &&
    modelOptions.localizedFields &&
    modelOptions.localizedFields.length > 0
  ) {
    return modelOptions.localizedFields.includes(fieldId)
  }
  return false
}

const getModelVersionFields = (component: ContentfulComponent) => {
  console.log(`Setting model version to ${component.modelVersion}`)

  return {
    disabled: true,
    id: 'modelVersion',
    localized: false,
    name: component.modelVersion,
    omitted: false,
    required: false,
    type: 'Symbol',
  }
}

const getApiFields = (context: Context, componentName: string): any[] => {
  const component = context.contentfulComponents[componentName]
  const apiFields = []
  Object.entries(component.fields).forEach(
    ([fieldId, field]: [string, ContentfulField]) => {
      console.log(`Adding field ${fieldId}`)
      const apiField = { id: fieldId } as any
      Object.entries(field.specs).forEach(([specName, specValue]) => {
        apiField[specName] = specValue
      })
      apiFields.push(apiField)
    }
  )
  // Add model version
  apiFields.push(getModelVersionFields(component))
  return apiFields
}
