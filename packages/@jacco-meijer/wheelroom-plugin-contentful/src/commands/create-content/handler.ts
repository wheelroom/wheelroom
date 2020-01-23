import {
  createEntry,
  getEntry,
  getFields,
  publishEntry,
  updateEntry,
} from '../../contentful-api/content'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { createAsset } from './create-asset'

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
    'Proceed creating Contentful demo content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  await createAsset(context)
  for (const component of context.contentfulComponents) {
    console.log(
      `Creating demo content for model ${component.componentId} =============`
    )
    try {
      refreshContext(context)
      getFields(context, component)
      // DEBUG: skip for now
      await getEntry(context, component)
      await updateEntry(context)
      await createEntry(context, component)
      await publishEntry(context)
      console.log(
        `Succesfully created content for model ${component.componentId}`
      )
    } catch (error) {
      handleError(error)
    }
  }
}

const handleError = (error: Error) => {
  console.log(error.message)
}
