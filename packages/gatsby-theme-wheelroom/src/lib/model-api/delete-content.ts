import { Context } from '../types/context'
import { getClient, getEnvironment, getSpace } from './context/init'

const demoEntryPostfix = 'DemoEntry'

const finish = async (context: Context) => {
  console.log('Succesfully deleted content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

const getEntry = async (context: Context) => {
  console.log('Getting entry')
  try {
    context.entry = await context.space.getEntry(
      context.currentModel.type + demoEntryPostfix
    )
  } catch (error) {
    console.log(
      'Could not find entry',
      context.currentModel.type + demoEntryPostfix
    )
    context.entry = null
  }
}

const unPublishEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Unpublishing entry')
  context.entry = await context.entry.unpublish()
}

const deleteEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Deleting entry')
  context.entry.fields = context.fields

  context.entry = await context.entry.delete()
}

export const deleteContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    await getEntry(context)
    await unPublishEntry(context)
    await deleteEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const deleteContent = async (context: Context) => {
  for (const modelConfig of context.modelConfigs) {
    console.log('Deleting content for model', modelConfig.name, '=============')
    context.entry = null
    context.fields = {}
    context.currentModel = modelConfig.model
    await deleteContentForModel(context)
  }
}
