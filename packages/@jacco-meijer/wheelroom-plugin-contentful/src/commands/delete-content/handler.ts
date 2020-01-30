import {
  deleteEntry,
  getEntry,
  unPublishEntry,
} from '../../contentful-api/content'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { deleteAsset } from './delete-asset'

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
    'Proceed removing Contentful demo content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  await deleteAsset(context)
  for (const component of context.contentfulComponents) {
    console.log(
      `Removing demo content for model ${component.componentId} =============`
    )
    try {
      refreshContext(context)
      await getEntry(context, component)
      await unPublishEntry(context)
      await deleteEntry(context)
      console.log(
        `Succesfully removed content for model ${component.componentId}`
      )
    } catch (error) {
      handleError(error)
    }
  }
}
