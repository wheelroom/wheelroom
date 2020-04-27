import { ContentfulComponent } from '../types/contentful-components'
import { ContentfulField } from '../types/contentful-fields'
import { Context } from '../types/context'
import { createField } from './create-field'
import { getFieldValueFromEntry } from './get-field-value-from-entry'

const getReplacedContentData = (
  field: ContentfulField,
  fieldId: string,
  context: Context
) => {
  const createContentData: any = field.createContentData
  if (!(fieldId in context.contentfulApi.entry.fields)) {
    // If the field does not exist return the original createContentData
    return createContentData
  }
  const cfContent = getFieldValueFromEntry(context, fieldId)
  if (
    !createContentData ||
    !createContentData.pattern ||
    !createContentData.replacement
  ) {
    // If we don't have replace info on this field, return current Contentful value
    return cfContent
  }
  const pattern = createContentData.pattern
  const replacement = createContentData.replacement
  if (typeof pattern === 'number') {
    return replacement
  }
  if (Array.isArray(cfContent)) {
    return cfContent.map(item => item.replace(pattern, replacement))
  }
  if (typeof cfContent === 'string') {
    return cfContent.replace(pattern, replacement)
  }
  return 'bug-getReplacedContentData'
}

export const getFields = async (
  context: Context,
  component: ContentfulComponent,
  enableReplace: boolean
) => {
  Object.entries(component.fields).forEach(
    async ([fieldId, field]: [string, ContentfulField]) => {
      let createContentData = field.createContentData
      if (enableReplace) {
        // In replace mode, get current value for each field and replace content
        // if needed
        createContentData = getReplacedContentData(field, fieldId, context)
      }

      if (!createContentData && field.specs.required) {
        console.log(`Field ${fieldId} is required but has no createContentData`)
      }
      if (!createContentData) {
        return
      }
      const createdField = await createField(context, field, createContentData)
      context.contentfulApi.fields[fieldId] = createdField
    }
  )
}

export const getEntry = async (
  context: Context,
  component: ContentfulComponent
) => {
  console.log(`Getting entry`)
  try {
    context.contentfulApi.entry = await context.contentfulApi.environment.getEntry(
      component.componentId
    )
  } catch (error) {
    console.log(`Could not find entry ${component.componentId}`)
    context.contentfulApi.entry = null
  }
}

export const getEntries = async (
  context: Context,
  component: ContentfulComponent
) => {
  console.log(`Getting entries`)
  try {
    context.contentfulApi.entries = await context.contentfulApi.environment.getEntries(
      {
        'sys.id': component.componentId,
      }
    )
  } catch (error) {
    console.log(`Could not find entries for ${component.componentId}`)
    context.contentfulApi.entries = null
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

export const createEntry = async (
  context: Context,
  component: ContentfulComponent
) => {
  if (context.contentfulApi.entry) {
    return
  }
  console.log(`Creating new entry`)
  context.contentfulApi.entry = await context.contentfulApi.environment.createEntryWithId(
    component.type,
    component.componentId,
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
