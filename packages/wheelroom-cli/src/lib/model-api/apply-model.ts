import * as contentful from 'contentful-management'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

const dotEnvResult = dotenv.config()

if (dotEnvResult.error) {
  throw dotEnvResult.error
}

interface ProcessData {
  client?: any
  contentType?: any
  editorInterface: any
  environment?: any
  model?: any
  space?: any
}

// const readModelFromJson = (
//   data: ProcessData
// ): Promise<ProcessData> | ProcessData => {
//   const JSON_URL = 'src/test-part.json'
//   const jsonBuffer = fs.readFileSync(JSON_URL, 'utf8')
//   data.model = JSON.parse(jsonBuffer)
//   return data
// }

const getClient = (data: ProcessData): Promise<ProcessData> | ProcessData => {
  data.client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN,
  })
  return data
}

const getSpace = (data: ProcessData): Promise<ProcessData> | ProcessData => {
  return data.client.getSpace(process.env.CONTENTFUL_SPACE_ID).then(space => {
    data.space = space
    return data
  })
}

const getEnvironment = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  return data.space
    .getEnvironment(process.env.CONTENTFUL_ENVIRONMENT)
    .then(environment => {
      data.environment = environment
      return data
    })
}

const getModelVersion = (contentType: any): any => {
  const result = contentType.fields.find(field => {
    return field.id === 'modelVersion'
  })
  return result.name
}

const getContentType = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  return data.environment
    .getContentType(data.model.type)
    .then(contentType => {
      console.log(
        'Found existing content type',
        data.model.type,
        'with version',
        getModelVersion(contentType)
      )
      data.contentType = contentType
      return data
    })
    .catch(() => {
      console.log('Could not find content type', data.model.type)
      data.contentType = null
      return data
    })
}

const getApiFields = (data: ProcessData): any[] => {
  const apiFields = []
  Object.entries(data.model.fields).forEach(([fieldId, field]: any) => {
    console.log('Adding field', fieldId)
    const apiField = { id: fieldId }
    Object.entries(field.specs).forEach(([specName, specValue]) => {
      apiField[specName] = specValue
    })
    apiFields.push(apiField)
  })
  // Add model version
  console.log('Setting model version to', data.model.modelVersion)
  apiFields.push({
    disabled: true,
    id: 'modelVersion',
    localized: false,
    name: data.model.modelVersion,
    omitted: false,
    required: false,
    type: 'Symbol',
  })

  return apiFields
}

const updateContentType = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  // If we don't have a contentType there's nothing to do here
  if (data.contentType === null) {
    return data
  }
  console.log('Updating content type')
  data.contentType.description = data.model.description
  data.contentType.displayField = data.model.displayField
  data.contentType.fields = getApiFields(data)
  data.contentType.name = data.model.name

  return data.contentType.update().then(contentType => {
    data.contentType = contentType
    return data
  })
}

const createContentType = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  // Only create a new one if we it does not exist yet
  if (data.contentType !== null) {
    return data
  }
  console.log('Creating new content type', data.model.type)
  return data.environment
    .createContentTypeWithId(data.model.type, {
      description: data.model.description,
      displayField: data.model.displayField,
      fields: getApiFields(data),
      name: data.model.name,
    })
    .then(contentType => {
      data.contentType = contentType
      return data
    })
}

const publishContentType = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  console.log('Publishing content type')
  return data.contentType.publish().then(contentType => {
    data.contentType = contentType
    return data
  })
}

const getEditorInterface = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  // If we don't have a contentType there's nothing to do here
  if (data.contentType === null) {
    return data
  }
  return data.environment
    .getEditorInterfaceForContentType(data.model.type)
    .then(editorInterface => {
      console.log('Fetched editor interface')
      data.editorInterface = editorInterface
      return data
    })
}

const getModelFieldById = (data: ProcessData, fieldIdLookup: string): any => {
  const result = Object.entries(data.model.fields).find(
    ([fieldId, field]: any) => {
      return fieldId === fieldIdLookup
    }
  )
  return result || [fieldIdLookup, {}]
}

const updateEditorInterface = (
  data: ProcessData
): Promise<ProcessData> | ProcessData => {
  // If we don't have a editorInterface there's nothing to do here
  if (data.editorInterface === null) {
    return data
  }
  data.editorInterface.controls.forEach(control => {
    const [modelFieldId, modelField] = getModelFieldById(data, control.fieldId)
    if (!modelField.widgetId) {
      return
    }
    console.log('Updating editor interface for field', modelFieldId)
    control.widgetId = modelField.widgetId
    control.settings = modelField.settings
  })

  return data.editorInterface.update().then(editorInterface => {
    data.editorInterface = editorInterface
    return data
  })
}

const finish = (data: ProcessData): Promise<ProcessData> | ProcessData => {
  console.log('Succesfully ran migration for:', data.model.type)
  // console.log('data', data.contentType)
  return data
}

const handleError = error => {
  console.error('Error:', error.message)
}

export const applyModel = model => {
  const processData = {
    contentType: null,
    model,
  } as ProcessData

  return (
    Promise.resolve(processData)
      // .then(readModelFromJson)
      .then(getClient)
      .then(getSpace)
      .then(getEnvironment)
      .then(getContentType)
      .then(updateContentType)
      .then(createContentType)
      .then(publishContentType)
      .then(getEditorInterface)
      .then(updateEditorInterface)
      .then(finish)
      .catch(handleError)
  )
}
