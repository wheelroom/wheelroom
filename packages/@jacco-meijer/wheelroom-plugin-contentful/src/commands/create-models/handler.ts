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
import { getClient, getEnvironment, getSpace } from '../../contentful-api/init.js'
import { componentsFound } from '../../lib/components-found.js'
import { confirmAction } from '../../lib/confirm-action.js'
import { getCurrentModel } from '../../lib/get-current-model.js'
import { initializeContext } from '../../lib/initialize-context.js'
import { readDotEnv } from '../../lib/read-dot-env.js'
import { Context } from '../../types/context.js'

const finish = async (context: Context) => {
  console.log(
    `Succesfully ran migration for ${context.currentModel.model.type}`
  )
  return context
}

const handleError = (error: Error) => {
  console.log(error.message)
}

export const createModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)
    await getContentType(context)
    await updateContentType(context)
    await createContentType(context)
    await publishContentType(context)
    await getEditorInterface(context)
    await updateEditorInterface(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const handler = async (argv: any) => {
  readDotEnv()
  const context = initializeContext(argv)
  if (!componentsFound(context.components)) {
    return
  }
  const confirmed = await confirmAction(
    'Proceed creating Contentful models for these components',
    context
  )
  if (!confirmed) {
    return
  }
  for (const [componentName, component] of Object.entries(context.components)) {
    console.log(`Creating or updating model ${componentName} =============`)
    const newContext = initializeContext(argv)
    newContext.currentModel = getCurrentModel(component)

    await createModel(newContext)
  }
}
