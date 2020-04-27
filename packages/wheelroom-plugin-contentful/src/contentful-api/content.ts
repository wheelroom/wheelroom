import { ContentfulComponent } from '../types/contentful-components'
import { Context } from '../types/context'

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
        'sys.contentType.sys.id': component.type,
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
