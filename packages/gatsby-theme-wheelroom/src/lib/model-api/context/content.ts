import { Context } from '../../types/context'
import { Field } from '../../types/model'

const demoEntryPostfix = 'DemoEntry'

export const getFields = (context: Context) => {
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
          switch (field.specs.linkType) {
            case 'Asset':
              context.fields[fieldId] = {
                nl: {
                  sys: {
                    id: 'demoAsset',
                    linkType: 'Asset',
                    type: 'Link',
                  },
                },
              }
          }
          break

        default:
          break
      }
    }
  )
}

export const getEntry = async (context: Context) => {
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

export const updateEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Updating entry')
  context.entry.fields = context.fields

  context.entry = await context.entry.update()
}

export const createEntry = async (context: Context) => {
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

export const publishEntry = async (context: Context) => {
  console.log('Publishing entry')
  await context.entry.publish()
}

export const unPublishEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Unpublishing entry')
  context.entry = await context.entry.unpublish()
}

export const deleteEntry = async (context: Context) => {
  if (!context.entry) {
    return
  }
  console.log('Deleting entry')
  context.entry = await context.entry.delete()
}
