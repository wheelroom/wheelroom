import {
  getEntries,
  getFields,
  updateEntry,
  publishEntry,
} from '../../contentful-api/content'
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
    'Proceed replacing Contentful content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  for (const component of context.contentfulComponents) {
    console.log(
      `Replacing content for model ${component.componentId} =============`
    )
    try {
      refreshContext(context)
      await getEntries(context, component)
      const entries = context.contentfulApi.entries.items
      if (!entries || !Array.isArray(entries)) {
        console.log(`No entries for model ${component.componentId}`)
        continue
      }
      await Promise.all(
        entries.map(async (entry: any) => {
          context.contentfulApi.entry = entry
          // The true flag enables the replace function
          await getFields(context, component, true)
          await updateEntry(context)
          await publishEntry(context)
        })
      )
      console.log(
        `Succesfully replaced content for model ${component.componentId}`
      )
    } catch (error) {
      handleError(error)
    }
  }
}
