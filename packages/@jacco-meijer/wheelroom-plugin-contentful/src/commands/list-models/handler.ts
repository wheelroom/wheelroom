import { getContentTypes } from '../../contentful-api/content-type'
import { envComplete } from '../../lib/env-complete'
import { initializeContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { getEditorInterfaceByType } from '../../contentful-api/editor-interface'

const handleError = (error: Error) => {
  console.log(error.message)
}

/**
 * This is about reverse engineering from Contentful to the original WHeelroom
 * config. However useful for the time being, this command needs improvement.
 *
 * The better approach is to use the contentful field definitions.
 *
 */
const addSpecificFields = (obj: any, field: any) => {
  if (field.type === 'Date') {
    obj.type = 'date'
  }
  if (field.type === 'Dropdown') {
    obj.type = 'dropdown'
    obj.items = field.validations[0].in
  }
  if (field.type === 'Link' && field.validations[0].linkMimetypeGroup) {
    obj.type = 'image'
  }
  if (field.type === 'Text') {
    obj.type = 'longText'
  }
  if (field.type === 'Array' && field.items.type === 'Link') {
    obj.type = 'multipleComponents'
    obj.allowedComponents = field.items.validations[0].linkContentType
  }
  if (field.type === 'Integer') {
    obj.type = 'number'
  }
  if (field.type === 'RichText') {
    obj.type = 'richText'
  }
  if (field.type === 'Symbol') {
    obj.type = 'shortText'
  }
  if (field.type === 'Link' && field.validations[0].linkContentType) {
    obj.type = 'singleComponent'
    obj.allowedComponents = field.validations[0].linkContentType
  }
  if (field.type === 'Array' && field.items.type === 'Symbol') {
    obj.type = 'tags'
  }
}

const addCommonFields = (obj: any, field: any, editorInterface: any) => {
  const thisFieldEditorInterface = editorInterface.controls.filter(
    (ei: any) => ei.fieldId === field.id
  )
  if (field.required) {
    obj.required = true
  }
  if (field.localized) {
    obj.localized = true
  }
  if (field.unique) {
    obj.localized = true
  }
  if (thisFieldEditorInterface[0].settings) {
    Object.assign(obj, thisFieldEditorInterface[0].settings)
  }
  // console.log(thisFieldEditorInterface[0].widgetId)
}

export const handler = async (argv: any) => {
  readDotEnv()
  if (!envComplete()) {
    return
  }
  const context = await initializeContext(argv)

  try {
    await getContentTypes(context)
  } catch (error) {
    handleError(error)
  }
  const allContentTypes = context.contentfulApi.allContentTypes
  if (
    typeof allContentTypes !== 'object' ||
    !allContentTypes.items ||
    !Array.isArray(allContentTypes.items)
  ) {
    console.log('Did not receive the expected list of content types')
    return
  }
  if (allContentTypes.items.length === 0) {
    console.log('No content types found, this is an empty space')
    return
  }
  const configComponents: any = {}
  await Promise.all(
    allContentTypes.items.map(async (ct: any) => {
      // Fetch editor interface
      const editorInterface = await getEditorInterfaceByType(context, ct.sys.id)
      configComponents[ct.sys.id] = {}
      ct.fields.forEach((field: any) => {
        configComponents[ct.sys.id][field.id] = {}
        addCommonFields(
          configComponents[ct.sys.id][field.id],
          field,
          editorInterface
        )
        addSpecificFields(configComponents[ct.sys.id][field.id], field)
      })
    })
  )
  console.log(JSON.stringify(configComponents, null, 2))
  // console.log(JSON.stringify(allContentTypes, null, 2))
}
