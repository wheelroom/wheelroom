import { ContentfulField } from '../../types/contentful-fields'
import { getFieldValueFromEntry } from './get-field-value-from-entry'
import { Context } from '../../types/context'

/**
 *
 * Given a field, check if the createContentData property contains 'pattern' and
 * 'replacement' properties. If so, execute the replace and return the value. If
 * not, return the value from the fetched Contentful entry. If the field does
 * not exist in the entry, return undefined.
 *
 */

export const getReplacedContentData = (
  field: ContentfulField,
  fieldId: string,
  context: Context
) => {
  const createContentData: any = field.createContentData
  if (!(fieldId in context.contentfulApi.entry.fields)) {
    // If the field does not exist return undefined
    return
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
    console.log(`Replacing field ${fieldId}: /${pattern}/${replacement}/`)
    return replacement
  }
  if (Array.isArray(cfContent)) {
    const newValue = cfContent.map((item) => item.replace(pattern, replacement))
    console.log(`Replacing field ${fieldId}: /${cfContent}/${newValue}/`)
    return newValue
  }
  if (typeof cfContent === 'string') {
    const newValue = cfContent.replace(pattern, replacement)
    console.log(`Replacing field ${fieldId}: /${cfContent}/${newValue}/`)
    return newValue
  }
  return 'bug-getReplacedContentData'
}
