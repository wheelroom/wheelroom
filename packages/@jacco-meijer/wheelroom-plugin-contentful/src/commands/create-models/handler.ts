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

  for (const componentId of Object.keys(context.contentfulComponents)) {
    console.log(`Creating or updating model ${componentId} =============`)
    try {
      refreshContext(context)
      await getContentType(context, componentId)
      await updateContentType(context, componentId)
      await createContentType(context, componentId)
      await publishContentType(context, componentId)
      await getEditorInterface(context, componentId)
      await updateEditorInterface(context, componentId)
    } catch (error) {
      handleError(error)
    }
    console.log(`Succesfully created model ${componentId}`)
  }
}

const handleError = (error: Error) => {
  console.log(error.message)
}
