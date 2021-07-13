import { inspect } from 'util'
import { PushHandler } from '@wheelroom/push/plain'
import { config } from 'dotenv'
import contentful from 'contentful-management'
import { ContentFields, FieldType } from 'contentful-management/types'

export const handler: PushHandler = async ({ typeData }) => {
  const nodeEnv = process.env.NODE_ENV || 'development'
  const envPath = `.env.${nodeEnv}`
  config({ path: envPath })
  console.log(`============ Starting Contentful plugin`)
  if (!typeData) return
  console.log(`Wheelroom project: ${process.env.WHEELROOM_PROJECT_NAME}`)

  const client = contentful.createClient({
    accessToken: process.env.CONTENTFUL_CMA_TOKEN!,
  })
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID!)
  const environment = await space.getEnvironment('master')

  for (const wrType of Object.values(typeData)) {
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

      const newField: ContentFields = {
        id: fieldId,
        // initialValue: { key: 'value' },
        linkType: fieldTag['@linkType'],
        localized: '@localized' in fieldTag,
        name: fieldTag['@name'] || fieldId, // TODO: Capitalize fieldId
        required: '@required' in fieldTag,
        type: fieldTag['@type'] as FieldType['type'],
      }
      if (fieldTag['@type'] === 'Array') {
        newField.items = {
          type: fieldTag['@itemsType'],
          linkType: fieldTag['@itemsLinkType'],
        }
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
      name: wrType.interface.typeName || 'No name',
      description: wrType.interface.description,
      displayField: interfaceTags['@displayField'],
      fields,
    }
    let contentType
    try {
      // Fetch exiting and update
      contentType = await environment.getContentType(interfaceTags['@type'])
      console.log(`Contentful API, updating existing ${interfaceTags['@type']}`)
      Object.assign(contentType, contentTypeData)
      contentType = await contentType.update()
    } catch (e) {
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

export const validations = [
  { in: ['item A', 'item B', 'item C'] },
  { linkMimetypeGroup: ['image', 'video'] },
  { linkContentType: ['page', 'firstSection', 'secondSection'] },
  { size: { max: 155, min: 0 } },
  {
    message: 'Please use camel case: onlyCamelCaseAllowed',
    regexp: { pattern: '^[a-z]+([A-Z][a-z0-9]+)*$' },
  },
  {
    message: 'Please use a valid path: /this/is/a/valid/path/with/:slug',
    regexp: { pattern: '^\\/[a-z0-9:\\._/~%\\-\\+&\\#\\?!=\\(\\)@]*$' },
  },
  {
    message: 'Please use a valid url: https://this/is/a/valid/url',
    regexp: {
      pattern:
        '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$',
    },
  },
]
