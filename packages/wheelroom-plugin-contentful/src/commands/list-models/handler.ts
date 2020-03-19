import { getContentTypes } from '../../contentful-api/content-type'
import { envComplete } from '../../lib/env-complete'
import { initializeContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { getEditorInterfaceByType } from '../../contentful-api/editor-interface'
import { addFields } from './add-fields'

const handleError = (error: Error) => {
  console.log(error.message)
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
      configComponents[ct.sys.id] = {
        fields: {},
        settings: {
          asBoilerplate: false,
          asFragment: false,
          asPageSection: false,
        },
      }
      ct.fields.forEach((field: any) => {
        if (field.id === 'modelVersion') {
          configComponents[ct.sys.id].modelVersion = field.name
          // Don't add this field, continue with next field
          return
        }
        configComponents[ct.sys.id].fields[field.id] = {}
        addFields(
          context,
          editorInterface,
          configComponents[ct.sys.id].fields[field.id],
          field
        )
      })
    })
  )
  console.log(JSON.stringify(configComponents, null, 2))
}
