import { getContentTypes } from '../../contentful-api/content-type'
import { envComplete } from '../../lib/env-complete'
import { initializeContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'

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
  allContentTypes.items.forEach((ct: any) => {
    const fields = ct.fields.map((field: any) => field.id).join('/')
    console.log(`ID:${ct.sys.id}\nFIELDS: ${fields}\n`)
  })
}
