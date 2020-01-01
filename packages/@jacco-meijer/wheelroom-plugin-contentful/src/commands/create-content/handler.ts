import {
  createEntry,
  getEntry,
  getFields,
  publishEntry,
  updateEntry,
} from '../../contentful-api/content'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { createAsset } from './create-asset'

export const handler = async (argv: any) => {
  readDotEnv()
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
  for (const componentName of Object.keys(context.contentfulComponents)) {
    console.log(
      `Creating demo content for model ${componentName} =============`
    )
    try {
      refreshContext(context)
      getFields(context, componentName)
      await getEntry(context, componentName)
      await updateEntry(context)
      await createEntry(context, componentName)
      await publishEntry(context)
    } catch (error) {
      handleError(error)
    }
    console.log(`Succesfully created content for model ${componentName}`)
  }
}

const handleError = (error: Error) => {
  console.log(error.message)
}
