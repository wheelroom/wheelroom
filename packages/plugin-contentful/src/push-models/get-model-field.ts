import chalk from 'chalk'
import { camelToSpaces, firstUpperCase } from '@wheelroom/push/plain'
import { ContentFields, FieldType } from 'contentful-management/types'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'

export interface GetModelField {
  fieldId: string
  fieldTag: Record<string, string>
  validationsMap: ValidationsMap
}

export const getModelField = ({
  fieldId,
  fieldTag,
  validationsMap,
}: GetModelField) => {
  const log = console.log
  // TODO: Add support for multiple validations
  const validations = []
  if (fieldTag['@validation']) {
    log(chalk.red(`Adding validation ${fieldTag['@validation']}`))
    if (fieldTag['@validation'] in validationsMap) {
      validations.push(validationsMap[fieldTag['@validation']])
    } else {
      log(chalk.red(`Warning: validation ${fieldTag['@validation']} not found`))
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
    linkType: fieldTag['@linkType'],
    localized: '@localized' in fieldTag,
    name: fieldTag['@name'] || humanReadableFieldId,
    required: '@required' in fieldTag,
    type: fieldTag['@type'] as FieldType['type'],
  }
  // Add validations to Array items if type === Array
  if (fieldTag['@type'] === 'Array') {
    newField.id = fieldIdWithoutPostfix
    newField.items = {
      type: fieldTag['@itemsType'],
      linkType: fieldTag['@itemsLinkType'],
      validations,
    }
  } else {
    newField.validations = validations
  }
  return newField
}
