import { ContentfulApiContext } from '../types/contentful-api-context'
import { Field } from '../types/model'

const demoEntryPostfix = 'DemoEntry'

export const getFields = (context: ContentfulApiContext) => {
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
          const arrayItems = field.specs.items || ({} as any)
          switch (arrayItems.type) {
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

/** If custom variations are defined, set demo content to first variation */
export const applyVariationField = (context: ContentfulApiContext) => {
  if (context.variationField.variations.length > 0) {
    context.fields.variation = { nl: context.variationField.variations[0] }
  }
}

export const getEntry = async (context: ContentfulApiContext) => {
  console.log(`Getting entry`)
  try {
    context.entry = await context.environment.getEntry(
      context.currentModel.type + demoEntryPostfix
    )
  } catch (error) {
    console.log(
      `Could not find entry ${context.currentModel.type + demoEntryPostfix}`
    )
    context.entry = null
  }
}

export const updateEntry = async (context: ContentfulApiContext) => {
  if (!context.entry) {
    return
  }
  console.log(`Updating entry`)
  context.entry.fields = context.fields

  context.entry = await context.entry.update()
}

export const createEntry = async (context: ContentfulApiContext) => {
  if (context.entry) {
    return
  }
  console.log(`Creating new entry`)
  context.entry = await context.environment.createEntryWithId(
    context.currentModel.type,
    context.currentModel.type + demoEntryPostfix,
    {
      fields: context.fields,
    }
  )
}

export const publishEntry = async (context: ContentfulApiContext) => {
  console.log(`Publishing entry`)
  await context.entry.publish()
}

export const unPublishEntry = async (context: ContentfulApiContext) => {
  if (!context.entry) {
    return
  }
  console.log(`Unpublishing entry`)
  context.entry = await context.entry.unpublish()
}

export const deleteEntry = async (context: ContentfulApiContext) => {
  if (!context.entry) {
    return
  }
  console.log(`Deleting entry`)
  context.entry = await context.entry.delete()
}
