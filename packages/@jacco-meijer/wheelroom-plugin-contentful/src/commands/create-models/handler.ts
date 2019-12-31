import {
  createContentType,
  getContentType,
  publishContentType,
  updateContentType,
} from '../../contentful-api/content-type'
import {
  getEditorInterface,
  updateEditorInterface,
} from '../../contentful-api/editor-interface'
import { getClient, getEnvironment, getSpace } from '../../contentful-api/init'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { initializeContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'

export const handler = async (argv: any) => {
  readDotEnv()
  const context = initializeContext(argv)
  if (!componentsFound(context.contentfulComponents)) {
    return
  }
  const confirmed = await confirmAction(
    'Proceed creating Contentful models for these components',
    context
  )
  if (!confirmed) {
    return
  }

  for (const componentName of Object.keys(context.contentfulComponents)) {
    console.log(`Creating or updating model ${componentName} =============`)
    try {
      await getClient(context)
      await getSpace(context)
      await getEnvironment(context)
      await getContentType(context, componentName)
      await updateContentType(context, componentName)
      await createContentType(context, componentName)
      await publishContentType(context, componentName)
      await getEditorInterface(context, componentName)
      await updateEditorInterface(context, componentName)
    } catch (error) {
      handleError(error)
    }
    console.log(`Succesfully created model ${componentName}`)
  }
}

const handleError = (error: Error) => {
  console.log(error.message)
}
