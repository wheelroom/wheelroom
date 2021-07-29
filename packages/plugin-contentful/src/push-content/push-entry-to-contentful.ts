import {
  CreateEntryProps,
  Environment,
  KeyValueMap,
} from 'contentful-management/types'
import { WrInterface } from '../../../push/build/plain'

export interface PushEntryToContentful {
  contentfulEnvironment: Environment
  contentTypeId: string
  fieldValues: KeyValueMap
  fields: WrInterface['fields']
  variableName: string
}

/**
 *
 * - Loop through fields,
 * - If it's an array, collect an array of values
 * - For each, or for only one, do this:
 * - Check if type or itemsType is link
 * - If so, see if we have sys.id - use that as value
 * - If not, do a recursive call to get the sys.id and use that as value
 * - How do we get the fieldTags of the recursive call?
 * - Answer: don't add inline objects, we don't have an easy way to know the type
 * - With the value or values, call create-fields
 * - Next field
 *
 */

export const pushEntryToContentful = async ({
  contentfulEnvironment,
  contentTypeId,
  fieldValues,
  fields,
  variableName,
}: PushEntryToContentful) => {
  console.info('contentTypeId', contentTypeId)
  console.info('variableName', variableName)
  for (const fieldId of Object.keys(fieldValues)) {
    console.info(fieldId, fields![fieldId])
  }

  await contentfulEnvironment.createEntryWithId(contentTypeId, 'id', {
    fields: {},
  } as CreateEntryProps)
}
