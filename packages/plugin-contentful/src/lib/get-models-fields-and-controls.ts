import chalk from 'chalk'
import { camelToSpaces, firstUpperCase, WrType } from '@wheelroom/push/plain'
import { ContentFields, FieldType } from 'contentful-management/types'
import { ValidationsMap } from './get-wheelroom-plugin-data'

export interface GetModelsFieldsAndControls {
  interfaceFieldTags: { [fieldName: string]: Record<string, string> }
  validationsMap: ValidationsMap
  wrType: WrType
}

export const getModelsFieldsAndControls = ({
  interfaceFieldTags,
  validationsMap,
  wrType,
}: GetModelsFieldsAndControls) => {
  const controls = []
  const fields = []
  const log = console.log
  for (const [fieldId, fieldTag] of Object.entries(interfaceFieldTags)) {
    if ('@ignore' in fieldTag) {
      continue
    }
    if (!fieldTag['@type']) {
      log(
        chalk.red(
          `No @type inline tag:  ${wrType.interface.typeName}/${fieldId}`
        )
      )
      continue
    }
    if (fieldTag['@type'] === 'Link' && !fieldTag['@linkType']) {
      log(
        chalk.red(
          `@type=Link without @linkType: ${wrType.interface.typeName}/${fieldId}`
        )
      )
      continue
    }
    if (fieldTag['@type'] === 'Array' && !fieldTag['@itemsType']) {
      log(
        chalk.red(
          `@type=Array without @itemsType: ${wrType.interface.typeName}/${fieldId}`
        )
      )
      continue
    }
    if (
      fieldTag['@type'] === 'Array' &&
      fieldTag['@itemsType'] === 'Link' &&
      !fieldTag['@itemsLinkType']
    ) {
      log(
        chalk.red(
          `@type=Array, @itemsType=Link without @itemsLinkType:  ${wrType.interface.typeName}/${fieldId}`
        )
      )
      continue
    }
    // TODO: Add support for multiple validations
    const validations = []
    if (fieldTag['@validation']) {
      log(chalk.red(`Adding validation ${fieldTag['@validation']}`))
      if (fieldTag['@validation'] in validationsMap) {
        validations.push(validationsMap[fieldTag['@validation']])
      } else {
        log(
          chalk.red(`Warning: validation ${fieldTag['@validation']} not found`)
        )
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
    fields.push(newField)
    if (fieldTag['@widget'] || fieldTag['@helpText']) {
      const control = {
        fieldId,
        widgetNamespace: 'builtin',
        widgetId: fieldTag['@widget'],
        settings: { helpText: fieldTag['@helpText'] },
      }
      console.log(chalk.red(`Adding editor control for field ${fieldId}`))
      controls.push(control)
    }
  }
  return { fields, controls }
}
