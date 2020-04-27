import {
  getEntries,
  publishEntry,
  updateEntry,
} from '../../contentful-api/content'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { getFields } from '../../contentful-api/fields/get-fields'

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
    'Proceed replacing Contentful content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  for (const component of context.contentfulComponents) {
    console.log(`Replacing content for model ${component.type} =============`)
    try {
      await getEntries(context, component)
      const entries = context.contentfulApi.entries.items
      if (!entries || !Array.isArray(entries)) {
        console.log(`No entries for model ${component.type}`)
        continue
      }
      for (const entry of entries) {
        refreshContext(context)
        context.contentfulApi.entry = entry
        console.log(`Replacing content for entry ${entry.sys.id} -----------`)
        await getFields(context, component, true)
        await updateEntry(context)
        await publishEntry(context)
      }
      console.log(`Succesfully replaced content for model ${component.type}`)
    } catch (error) {
      handleError(error)
    }
  }
}
