import { ContentfulField } from '../types/contentful-fields'
import { Context } from '../types/context'

// const demoEntryPostfix = 'DemoEntry'

export const getFields = (context: Context, componentId: string) => {
  const component = context.contentfulComponents[componentId]
  Object.entries(component.fields).forEach(
    ([fieldId, field]: [string, ContentfulField]) => {
      if (!field.createContentData && field.specs.required) {
        console.log(`Field ${fieldId} is required but has no createContentData`)
      }
      if (!field.createContentData) {
        return
      }
      switch (field.specs.type) {
        case 'Boolean':
        case 'Date':
        case 'Integer':
        case 'Symbol':
        case 'Text':
          context.contentfulApi.fields[fieldId] = {
            [context.pluginOptions.defaultLocale]: field.createContentData,
          }
          break

        case 'Array':
          const arrayItems = field.specs.items || ({} as any)
          switch (arrayItems.type) {
            case 'Link':
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions
                  .defaultLocale]: (field.createContentData as []).map(
                  (data: string) => {
                    return {
                      sys: {
                        id: data, // + demoEntryPostfix,
                        linkType: 'Entry',
                        type: 'Link',
                      },
                    }
                  }
                ),
              }
              break

            case 'Boolean':
            case 'Date':
            case 'Integer':
            case 'Symbol':
            case 'Text':
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions.defaultLocale]: field.createContentData,
              }
              break
          }
          break

        case 'RichText':
          context.contentfulApi.fields[fieldId] = {
            [context.pluginOptions.defaultLocale]: {
              content: [
                {
                  content: [
                    {
                      data: {},
                      marks: [],
                      nodeType: 'text',
                      value: field.createContentData,
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
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions.defaultLocale]: {
                  sys: {
                    id: 'demoAsset',
                    linkType: 'Asset',
                    type: 'Link',
                  },
                },
              }
              break

            case 'Entry':
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions.defaultLocale]: {
                  sys: {
                    id: field.createContentData, // + demoEntryPostfix,
                    linkType: 'Entry',
                    type: 'Link',
                  },
                },
              }
              break
          }
          break

        default:
          break
      }
    }
  )
}

export const getEntry = async (context: Context, componentId: string) => {
  console.log(`Getting entry`)
  try {
    context.contentfulApi.entry = await context.contentfulApi.environment.getEntry(
      componentId
    )
  } catch (error) {
    console.log(`Could not find entry ${componentId}`)
    context.contentfulApi.entry = null
  }
}

export const updateEntry = async (context: Context) => {
  if (!context.contentfulApi.entry) {
    return
  }
  console.log(`Updating entry`)
  context.contentfulApi.entry.fields = context.contentfulApi.fields

  context.contentfulApi.entry = await context.contentfulApi.entry.update()
}

export const createEntry = async (context: Context, componentId: string) => {
  const component = context.contentfulComponents[componentId]
  if (context.contentfulApi.entry) {
    return
  }
  console.log(`Creating new entry`)
  context.contentfulApi.entry = await context.contentfulApi.environment.createEntryWithId(
    component.type,
    componentId,
    {
      fields: context.contentfulApi.fields,
    }
  )
}

export const publishEntry = async (context: Context) => {
  console.log(`Publishing entry`)
  await context.contentfulApi.entry.publish()
}

export const unPublishEntry = async (context: Context) => {
  if (!context.contentfulApi.entry) {
    return
  }
  console.log(`Unpublishing entry`)
  context.contentfulApi.entry = await context.contentfulApi.entry.unpublish()
}

export const deleteEntry = async (context: Context) => {
  if (!context.contentfulApi.entry) {
    return
  }
  console.log(`Deleting entry`)
  context.contentfulApi.entry = await context.contentfulApi.entry.delete()
}
