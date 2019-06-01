import * as contentful from 'contentful-management'
import { Context } from './types'

const getClient = async (context: Context) => {
  context.contentfulClient = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  })
}

const getSpace = async (context: Context) => {
  context.space = await context.contentfulClient.getSpace(
    process.env.CONTENTFUL_SPACE_ID
  )
}

const getEnvironment = async (context: Context) => {
  context.environment = await context.space.getEnvironment(
    process.env.CONTENTFUL_ENVIRONMENT
  )
}

const getModelVersion = (contentType: any): any => {
  const result = contentType.fields.find(field => {
    return field.id === 'modelVersion'
  })
  return result.name
}

const getContentType = async (context: Context) => {
  try {
    context.contentType = await context.environment.getContentType(
      context.model.type
    )
    console.log(
      'Found existing content type',
      context.model.type,
      'with version',
      getModelVersion(context.contentType)
    )
  } catch (error) {
    console.log('Could not find content type', context.model.type)
    context.contentType = null
  }
}

const getApiFields = (context: Context): any[] => {
  const apiFields = []
  Object.entries(context.model.fields).forEach(([fieldId, field]: any) => {
    console.log('Adding field', fieldId)
    const apiField = { id: fieldId }
    Object.entries(field.specs).forEach(([specName, specValue]) => {
      apiField[specName] = specValue
    })
    apiFields.push(apiField)
  })
  // Add model version
  console.log('Setting model version to', context.model.modelVersion)
  apiFields.push({
    disabled: true,
    id: 'modelVersion',
    localized: false,
    name: context.model.modelVersion,
    omitted: false,
    required: false,
    type: 'Symbol',
  })

  return apiFields
}

const updateContentType = async (context: Context) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentType === null) {
    return
  }
  console.log('Updating content type')
  context.contentType.description = context.model.description
  context.contentType.displayField = context.model.displayField
  context.contentType.fields = getApiFields(context)
  context.contentType.name = context.model.name

  context.contentType = await context.contentType.update()
}

const createContentType = async (context: Context) => {
  // Only create a new one if we it does not exist yet
  if (context.contentType !== null) {
    return
  }
  console.log('Creating new content type', context.model.type)
  context.contentType = await context.environment.createContentTypeWithId(
    context.model.type,
    {
      description: context.model.description,
      displayField: context.model.displayField,
      fields: getApiFields(context),
      name: context.model.name,
    }
  )
}

const publishContentType = async (context: Context) => {
  console.log('Publishing content type')
  context.contentType = await context.contentType.publish()
}

const getEditorInterface = async (context: Context) => {
  // If we don't have a contentType there's nothing to do here
  if (context.contentType === null) {
    return
  }
  context.editorInterface = await context.environment.getEditorInterfaceForContentType(
    context.model.type
  )
  console.log('Fetched editor interface')
}

const getModelFieldById = (context: Context, fieldIdLookup: string): any => {
  const result = Object.entries(context.model.fields).find(
    ([fieldId, field]: any) => {
      return fieldId === fieldIdLookup
    }
  )
  return result || [fieldIdLookup, {}]
}

const updateEditorInterface = async (context: Context) => {
  // If we don't have a editorInterface there's nothing to do here
  if (context.editorInterface === null) {
    return context
  }
  context.editorInterface.controls.forEach(control => {
    const [modelFieldId, modelField] = getModelFieldById(
      context,
      control.fieldId
    )
    if (!modelField.widgetId) {
      return
    }
    console.log('Updating editor interface for field', modelFieldId)
    control.widgetId = modelField.widgetId
    control.settings = modelField.settings
  })
  context.editorInterface = await context.editorInterface.update()
}

const finish = async (context: Context) => {
  console.log('Succesfully ran migration for:', context.model.type)
  // console.log('context', context.contentType)
  return context
}

const handleError = error => {
  console.error(error.message)
}

export const applyModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getContentType(context)
    await updateContentType(context)
    await createContentType(context)
    await publishContentType(context)
    await getEditorInterface(context)
    await updateEditorInterface(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const applyModels = async (context: Context) => {
  console.log('Running for each model')
}
