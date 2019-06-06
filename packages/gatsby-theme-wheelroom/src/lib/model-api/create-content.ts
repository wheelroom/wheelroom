import { Context } from '../types/context'
import { Field } from '../types/model'
import { getClient, getEnvironment, getSpace } from './context-init'

// TODO: Refactor into multiple files

const demoEntryPostfix = 'DemoEntry'

const finish = async (context: Context) => {
  console.log('Succesfully created content for:', context.currentModel.type)
  return context
}

const handleError = error => {
  console.log(error.message)
}

const getFields = (context: Context) => {
  Object.entries(context.currentModel.fields).forEach(
    ([fieldId, field]: [string, Field]) => {
      if (!field.initialContent && field.specs.required) {
        console.log(`Field ${fieldId} is required but has no initialContent`)
      }
      if (!field.initialContent) {
        return
      }
      switch (field.specs.type) {
        case 'Date':
        case 'Symbol':
          context.fields[fieldId] = { nl: field.initialContent }
          break

        case 'Array':
          switch (field.specs.items.type) {
            case 'Link':
              context.fields[fieldId] = {
                nl: [
                  {
                    sys: {
                      id: field.initialContent + demoEntryPostfix,
                      linkType: 'Entry',
                      type: 'Link',
                    },
                  },
                ],
              }
              break
            case 'Symbol':
              context.fields[fieldId] = { nl: field.initialContent }
              break
          }
          break

        case 'RichText':
          context.fields[fieldId] = {
            nl: {
              content: [
                {
                  content: [
                    {
                      data: {},
                      marks: [],
                      nodeType: 'text',
                      value: field.initialContent,
                    },
                  ],
                  data: {},
                  nodeType: 'paragraph',
                },
              ],
              data: {},
              nodeType: 'document',
            },
          }
          break

        case 'Link':
          context.fields[fieldId] = {
            nl: {
              sys: {
                id: field.initialContent + demoEntryPostfix,
                linkType: 'Entry',
                type: 'Link',
              },
            },
          }
          break

        default:
          break
      }
    }
  )
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

const updateEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Updating entry')
  context.entry.fields = context.fields

  context.entry = await context.entry.update()
}

const createEntry = async (context: Context) => {
  if (context.entry) {
    return
  }
  console.log('Creating new entry')
  context.entry = await context.space.createEntryWithId(
    context.currentModel.type,
    context.currentModel.type + demoEntryPostfix,
    {
      fields: context.fields,
    }
  )
}

const publishEntry = async (context: Context) => {
  console.log('Publishing entry')
  await context.entry.publish()
}

export const createContentForModel = async (context: Context) => {
  try {
    await getClient(context)
    await getSpace(context)
    await getEnvironment(context)

    getFields(context)
    await getEntry(context)
    await updateEntry(context)
    await createEntry(context)
    await publishEntry(context)
    await finish(context)
  } catch (error) {
    handleError(error)
  }
}

export const createContent = async (context: Context) => {
  for (const modelConfig of context.modelConfigs) {
    console.log('Creating content for model', modelConfig.name, '=============')
    context.entry = null
    context.fields = {}
    context.currentModel = modelConfig.model
    await createContentForModel(context)
  }
}
