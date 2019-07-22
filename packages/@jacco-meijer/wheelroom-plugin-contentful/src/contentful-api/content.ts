import { Context } from '../types/context'
import { Field } from '../types/model'
import { defaultVariations } from './defaults'

const demoEntryPostfix = 'DemoEntry'

export const getFields = (context: Context) => {
  Object.entries(context.currentModel.model.fields).forEach(
    ([fieldId, field]: [string, Field]) => {
      if (!field.initialContent && field.specs.required) {
        console.log(`Field ${fieldId} is required but has no initialContent`)
      }
      if (!field.initialContent) {
        return
      }
      switch (field.specs.type) {
        case 'Boolean':
        case 'Date':
        case 'Integer':
        case 'Symbol':
        case 'Text':
          context.contentfulApi.fields[fieldId] = {
            [context.pluginOptions.defaultLocale]: field.initialContent,
          }
          break

        case 'Array':
          const modelOptions = context.currentModel.modelOptions
          const arrayItems = field.specs.items || ({} as any)
          const initialContent =
            field.initialContent === 'initialPageSection' &&
            modelOptions &&
            modelOptions.initialPageSection
              ? modelOptions.initialPageSection
              : field.initialContent

          switch (arrayItems.type) {
            case 'Link':
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions.defaultLocale]: [
                  {
                    sys: {
                      id: initialContent + demoEntryPostfix,
                      linkType: 'Entry',
                      type: 'Link',
                    },
                  },
                ],
              }
              break

            case 'Boolean':
            case 'Date':
            case 'Integer':
            case 'Symbol':
            case 'Text':
              context.contentfulApi.fields[fieldId] = {
                [context.pluginOptions.defaultLocale]: field.initialContent,
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
                    id: field.initialContent + demoEntryPostfix,
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

/** If custom variations are defined, set demo content to first variation */
export const applyVariationField = (context: Context) => {
  let variations
  const modelOptions = context.currentModel.modelOptions
  if (
    modelOptions &&
    modelOptions.variations &&
    modelOptions.variations.length > 0
  ) {
    variations = modelOptions.variations[0]
  } else {
    variations = defaultVariations[0]
  }

  if ('variation' in context.contentfulApi.fields) {
    context.contentfulApi.fields.variation = {
      [context.pluginOptions.defaultLocale]: variations,
    }
  }
}

export const getEntry = async (context: Context) => {
  console.log(`Getting entry`)
  try {
    context.contentfulApi.entry = await context.contentfulApi.environment.getEntry(
      context.currentModel.model.type + demoEntryPostfix
    )
  } catch (error) {
    console.log(
      `Could not find entry ${context.currentModel.model.type +
        demoEntryPostfix}`
    )
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

export const createEntry = async (context: Context) => {
  if (context.contentfulApi.entry) {
    return
  }
  console.log(`Creating new entry`)
  context.contentfulApi.entry = await context.contentfulApi.environment.createEntryWithId(
    context.currentModel.model.type,
    context.currentModel.model.type + demoEntryPostfix,
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
