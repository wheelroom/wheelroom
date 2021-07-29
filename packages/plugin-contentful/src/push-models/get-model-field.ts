import chalk from 'chalk'
import { camelToSpaces, firstUpperCase } from '@wheelroom/push/plain'
import { ContentFields, FieldType } from 'contentful-management/types'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'

export interface GetModelField {
  fieldId: string
  fieldTags: Record<string, string>
  validationsMap: ValidationsMap
}

export const getModelField = ({
  fieldId,
  fieldTags,
  validationsMap,
}: GetModelField) => {
  const log = console.log
  // TODO: Add support for multiple validations
  const validations = []
  if (fieldTags['@validation']) {
    if (fieldTags['@validation'] in validationsMap) {
      log(chalk(`- validation ${fieldTags['@validation']}`))
      validations.push(validationsMap[fieldTags['@validation']])
    } else {
      log(chalk.red(`- validation ${fieldTags['@validation']} not found`))
      return
    }
  }

  // Contentful adds the 'Collection' postfix to array types, this is why
  // the Typescript definition includes a 'Collection' postfix. When
  // creating the field, we should create the type without that postfix.
  const collectionIndex = fieldId.indexOf('Collection')
  const fieldIdWithoutPostfix =
    collectionIndex > 0 ? fieldId.substring(0, collectionIndex) : fieldId
  const humanReadableFieldId = firstUpperCase(
    camelToSpaces(fieldIdWithoutPostfix)
  )

  const newField: ContentFields = {
    id: fieldId,
    // initialValue: { key: 'value' },
    linkType: fieldTags['@linkType'],
    localized: '@localized' in fieldTags,
    name: fieldTags['@name'] || humanReadableFieldId,
    required: '@required' in fieldTags,
    type: fieldTags['@type'] as FieldType['type'],
  }
  // Add validations to Array items if type === Array
  if (fieldTags['@type'] === 'Array') {
    newField.id = fieldIdWithoutPostfix
    newField.items = {
      type: fieldTags['@itemsType'],
      linkType: fieldTags['@itemsLinkType'],
      validations,
    }
  } else {
    newField.validations = validations
  }
  return newField
}
