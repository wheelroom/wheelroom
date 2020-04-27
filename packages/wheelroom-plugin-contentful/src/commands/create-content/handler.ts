import {
  createEntry,
  getEntry,
  publishEntry,
  updateEntry,
} from '../../contentful-api/content'
import { componentsFound } from '../../lib/components-found'
import { confirmAction } from '../../lib/confirm-action'
import { envComplete } from '../../lib/env-complete'
import { initializeContext, refreshContext } from '../../lib/initialize-context'
import { readDotEnv } from '../../lib/read-dot-env'
import { createAsset } from './create-asset'
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
    'Proceed creating Contentful demo content for these components',
    context
  )
  if (!confirmed) {
    return
  }
  await createAsset(context)
  const retryTable = []
  for (const component of context.contentfulComponents) {
    console.log(
      `Creating demo content for model ${component.componentId} =============`
    )
    try {
      refreshContext(context)
      // The false flag disables replace content
      await getFields(context, component, false)
      await getEntry(context, component)
      await updateEntry(context)
      await createEntry(context, component)
      await publishEntry(context)
      console.log(
        `Succesfully created content for model ${component.componentId}`
      )
    } catch (error) {
      if (error.name === 'UnresolvedLinks') {
        const message = JSON.parse(error.message)
        // 422 - ValidationFailed
        if (message.status === 422) {
          const notResolvableFields = message.details.errors
            .filter((error: { name: string }) => error.name === 'notResolvable')
            .map(
              (error: { path: string[]; link: { id: string } }) =>
                `${error.path[1]}=${error.link.id}`
            )
            .join(', ')
          console.log(
            `Could not publish ${component.componentId}:
  - Unresolvable links: ${notResolvableFields}
  - Added to retry table`
          )
          retryTable.push(component)
        }
      } else {
        handleError(error)
      }
    }
  }
  console.log('\n\nPublishing entries in retry table')
  for (const component of retryTable) {
    console.log(`Retry publishing model ${component.componentId} =============`)
    try {
      refreshContext(context)
      await getFields(context, component, false)
      await getEntry(context, component)
      await publishEntry(context)
      console.log(
        `Succesfully (with retry) created content for model ${component.componentId}`
      )
    } catch (error) {
      handleError(error)
    }
  }
}
