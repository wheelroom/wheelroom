import { ContentfulComponent } from '../..'
import { ContentfulField } from '../../types/contentful-fields'
import { getReplacedContentData } from './get-replaced-content-data'
import { createField } from './create-field'
import { Context } from '../../types/context'

/**
 *
 * Copy all values of the createContentData property to the right place in the
 * Contentful data structure. Replace values if needed.
 *
 */

export const getFields = async (
  context: Context,
  component: ContentfulComponent,
  enableReplace: boolean
) => {
  await Promise.all(
    Object.entries(component.fields).map(
      async ([fieldId, field]: [string, ContentfulField]) => {
        let createContentData = field.createContentData
        if (enableReplace) {
          // In replace mode, get current value for each field and replace content
          // if needed
          createContentData = getReplacedContentData(field, fieldId, context)
        }

        if (!createContentData && field.specs.required) {
          console.log(
            `Field ${fieldId} is required but has no createContentData`
          )
        }
        if (!createContentData) {
          return
        }
        const createdField = await createField(
          context,
          field,
          createContentData
        )
        context.contentfulApi.fields[fieldId] = createdField
      }
    )
  )
}
