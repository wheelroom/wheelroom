import {
  getContentType,
  unpublishContentType,
  deleteContentType,
} from '../../contentful-api/content-type'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
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
  if (!componentsFound(context.contentfulComponents)) {
    return
  }
  const confirmed = await confirmAction(
    'Proceed DELETING(!) Contentful models for these components',
    context
  )
  if (!confirmed) {
    return
  }

  for (const component of context.contentfulComponents) {
    console.log(`Deleting model ${component.componentId} =============`)
    try {
      refreshContext(context)
      await getContentType(context, component)
      await unpublishContentType(context, component)
      await deleteContentType(context, component)
      console.log(`Succesfully deleted model ${component.componentId}`)
    } catch (error) {
      handleError(error)
    }
  }
}
