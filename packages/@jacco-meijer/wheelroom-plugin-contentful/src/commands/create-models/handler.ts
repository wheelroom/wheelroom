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
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'

export const handler = async (argv: any) => {
  readDotEnv()
  if (!envComplete()) {
    return
  }
  const context = await initializeContext(argv)
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

  for (const component of context.contentfulComponents) {
    console.log(
      `Creating or updating model ${component.componentId} =============`
    )
    try {
      refreshContext(context)
      await getContentType(context, component)
      await updateContentType(context, component)
      await createContentType(context, component)
      await publishContentType(context)
      await getEditorInterface(context, component)
      await updateEditorInterface(context, component)
    } catch (error) {
      handleError(error)
    }
    console.log(`Succesfully created model ${component}`)
  }
}

const handleError = (error: Error) => {
  console.log(error.message)
}
