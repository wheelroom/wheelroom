import { inspect } from 'util'
import {
  camelToSpaces,
  firstUpperCase,
  PushHandler,
} from '@wheelroom/push/plain'
import { config } from 'dotenv'
import contentful from 'contentful-management'
import {
  ContentFields,
  FieldType,
  ContentTypeFieldValidation,
} from 'contentful-management/types'

export type WheelroomPluginData = {
  contentful?: {
    validations?: {
      [validationName: string]: ContentTypeFieldValidation
    }
  }
}

// TODO: Refactor
// - Respect callType
// - Split up in separate methods
// - Split up in separate files
export const handler: PushHandler = async ({ pluginData }) => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const envPath = `.env.${nodeEnv}`
  config({ path: envPath })
  console.log(`============ Starting Contentful plugin`)
  if (!pluginData) return
  console.log(`Wheelroom project: ${process.env.WHEELROOM_PROJECT_NAME}`)

  // Get data var and valildations
  const dataVarFn = new Function(`return ${pluginData.dataVar.value}`)
  const dataVarObj = dataVarFn() as WheelroomPluginData
  const validationsMap = dataVarObj.contentful?.validations || {}

  // Contentful client
  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN!,
  })
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!)
  const environment = await space.getEnvironment('master')

  for (const wrType of Object.values(pluginData.types)) {
    const interfaceFieldTags = wrType.interface.fieldTags || {}
    const interfaceTags = wrType.interface.interfaceTags || {}

    console.log(`Processing: ${wrType.interface.typeName}...`)
    if (!interfaceTags['@type']) {
      console.log(
        `Warning: Skippig ${wrType.interface.typeName}, no @type inline tag`
      )
      continue
    }
    const controls = []
    const fields = []
    for (const [fieldId, fieldTag] of Object.entries(interfaceFieldTags)) {
      if (!fieldTag['@type']) {
        console.log(
          `Warning: Skippig ${fieldId} field of ${wrType.interface.typeName}, no @type inline tag`
        )
        continue
      }
      if (fieldTag['@type'] === 'Link' && !fieldTag['@linkType']) {
        console.log(
          `Warning: Skippig ${fieldId} field of ${wrType.interface.typeName}, @type=Link without @linkType`
        )
        continue
      }
      if (fieldTag['@type'] === 'Array' && !fieldTag['@itemsType']) {
        console.log(
          `Warning: Skippig ${fieldId} field of ${wrType.interface.typeName}, @type=Array without @itemsType`
        )
        continue
      }
      if (
        fieldTag['@type'] === 'Array' &&
        fieldTag['@itemsType'] === 'Link' &&
        !fieldTag['@itemsLinkType']
      ) {
        console.log(
          `Warning: Skippig ${fieldId} field of ${wrType.interface.typeName}, @type=Array, @itemsType=Link without @itemsLinkType`
        )
        continue
      }
      // TODO: Add support for multiple validations
      const validations = []
      if (fieldTag['@validation']) {
        console.log(`Adding validation ${fieldTag['@validation']}`)
        if (fieldTag['@validation'] in validationsMap) {
          validations.push(validationsMap[fieldTag['@validation']])
        } else {
          console.log(
            `Warning: validation ${fieldTag['@validation']} not found`
          )
        }
      }

      // Contentful adds the 'Collection' postfix to array types, this is why
      // the Typescript definition includes a 'Collection' postfix. When
      // creating the field, we should create the type without that postfix.
      const collectionIndex = fieldId.indexOf('Collection')
      const fieldIdWithoutPostfix =
        collectionIndex > 0 ? fieldId.substring(0, collectionIndex) : fieldId
      const humanReadableFieldId = firstUpperCase(
        camelToSpaces(fieldIdWithoutPostfix)
      )

      const newField: ContentFields = {
        id: fieldId,
        // initialValue: { key: 'value' },
        linkType: fieldTag['@linkType'],
        localized: '@localized' in fieldTag,
        name: fieldTag['@name'] || humanReadableFieldId,
        required: '@required' in fieldTag,
        type: fieldTag['@type'] as FieldType['type'],
      }
      // Add validations to Array items if type === Array
      if (fieldTag['@type'] === 'Array') {
        newField.id = fieldIdWithoutPostfix
        newField.items = {
          type: fieldTag['@itemsType'],
          linkType: fieldTag['@itemsLinkType'],
          validations,
        }
      } else {
        newField.validations = validations
      }
      fields.push(newField)
      if (fieldTag['@widget'] || fieldTag['@helpText']) {
        const control = {
          fieldId,
          widgetNamespace: 'builtin',
          widgetId: fieldTag['@widget'],
          settings: { helpText: fieldTag['@helpText'] },
        }
        console.log(`Adding editor control for field ${fieldId}`)
        controls.push(control)
      }
    }

    const contentTypeData = {
      name:
        interfaceTags['@name'] ||
        interfaceTags['@type'] ||
        wrType.interface.typeName ||
        'No name',
      description: interfaceTags['@description'],
      displayField: interfaceTags['@displayField'],
      fields,
    }
    // console.log(inspect(contentTypeData, false, 10, true))
    let contentType
    try {
      // Fetch exiting and update
      contentType = await environment.getContentType(interfaceTags['@type'])
      console.log(`Contentful API, updating existing ${interfaceTags['@type']}`)
      Object.assign(contentType, contentTypeData)
      contentType = await contentType.update()
    } catch (contentfulError) {
      let errorData
      // We expect a 404, throw other errors if they occur
      try {
        errorData = JSON.parse(contentfulError.message)
        if (errorData.status !== 404) throw contentfulError
      } catch (jsonError) {
        throw contentfulError
      }
      // Create a new content type
      console.log(`Contentful API, creating new ${interfaceTags['@type']}`)
      contentType = await environment.createContentTypeWithId(
        interfaceTags['@type'],
        contentTypeData
      )
    }
    contentType = await contentType.publish()

    console.log(`Contentful API, updating editor interface`)
    const editorInterface = await contentType.getEditorInterface()
    editorInterface.controls = controls
    await editorInterface.update()

    for (const wrVar of wrType.variables) {
      const valueFn = new Function(`return ${wrVar.value}`)
      const valueArray = valueFn()
      console.log(
        'Data to send to Contentful',
        inspect(valueArray, false, 10, true)
      )
    }
  }
}
