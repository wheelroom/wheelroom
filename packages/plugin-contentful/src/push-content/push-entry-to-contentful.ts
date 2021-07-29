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
  id: string
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
  // contentfulEnvironment,
  contentTypeId,
  fieldValues,
  id,
}: PushEntryToContentful) => {
  const entryData: CreateEntryProps = {
    fields: fieldValues,
  }
  console.info(contentTypeId, id, entryData)
  // await contentfulEnvironment.createEntryWithId(contentTypeId, id, entryData)
}
