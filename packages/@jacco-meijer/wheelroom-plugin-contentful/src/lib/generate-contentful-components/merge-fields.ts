/**
 * mergeFields
 *
 * Take a wheelroom field and convert it to a parsed Contentful field
 *
 *
 * Process Wheelroom fields:
 *
 * - helpText?: string -> settings.helpText
 * - initialContent?: number | string -> initialContent
 * - localized?: boolean -> specs.localized
 * - name?: string -> specs.name
 * - required?: boolean -> specs.required
 * - system?: boolean -> SKIP
 * - type?: FieldType -> MATCH WITH DEFINITION
 *
 *
 * Process validations:
 *
 * - component: string | string[] -> specs.validations.0.linkContentType
 * - components: string | string[] -> specs.items.validations.0.linkContentType
 * - items?: string[] -> specs.validations.0.in
 * - maxLength?: number -> specs.validations.0.size.max
 * - unique?: boolean -> specs.validations.0.unique
 *
 */

import { parser, WheelroomField } from '@jacco-meijer/wheelroom'
import { ContentfulField, widgetID } from '../../types/contentful-fields'
import { createIfMissing, initialContentParser } from './merge-helpers'

export const mergeFields = (
  wheelroomField: WheelroomField,
  componentName: string,
  fieldName: string,
  fieldDefinition: ContentfulField,
  fieldDefaults: ContentfulField
): ContentfulField => {
  const first = wheelroomField
  const second = fieldDefinition
  const third = fieldDefaults

  // Hard coded system defaults as a fourth (and last) resort
  const fourth = {
    settings: {
      helpText: '',
    },
    specs: {
      localized: false,
      required: false,
      type: 'Symbol',
    },
    widgetId: 'singleLine' as widgetID,
  }

  // Add optional settings object if not present
  if (!('settings' in second)) {
    second.settings = {}
  }
  if (!('settings' in third)) {
    third.settings = {}
  }
  // Parser with most arguments preset
  const parse = (unparsed: string) =>
    parser({ componentName, fieldName, unparsed })

  const workingField: ContentfulField = {
    settings: {
      helpText: parse(
        first.helpText ||
          second.settings!.helpText ||
          third.settings!.helpText ||
          fourth.settings.helpText
      ),
    },
    specs: {
      localized:
        first.localized ||
        second.specs.localized ||
        third.specs.localized ||
        fourth.specs.localized,
      name: parse(first.name || second.specs.name || third.specs.name),
      required:
        first.required ||
        second.specs.required ||
        third.specs.required ||
        fourth.specs.required,
      type: second.specs.type || third.specs.type || fourth.specs.type,
    },
    widgetId: second.widgetId || third.widgetId || fourth.widgetId,
  }

  // Handle initial content
  let initialContent =
    first.initialContent || second.initialContent || third.initialContent
  if (initialContent) {
    if (typeof initialContent === 'string') {
      initialContent = initialContentParser(
        parse(initialContent),
        wheelroomField
      )
    }
    Object.assign(workingField, { initialContent })
  }
  // Handle linkType
  const linkType = second.specs.linkType || third.specs.linkType
  if (linkType) {
    workingField.specs.linkType = linkType
  }

  // Handle items
  const items = second.specs.items || third.specs.items
  if (items) {
    workingField.specs.items = Object.assign({}, items)
  }

  // Handle validations present in second or third components
  const validations = second.specs.validations || third.specs.validations
  if (validations) {
    createIfMissing(workingField.specs, 'validations', 'array')
    validations.forEach((validation: any) => {
      workingField.specs.validations!.push(Object.assign({}, validation))
    })
  }
  // Process other validations
  if (first.components) {
    // This could possible be a string, in that case the variable
    // %pageSectionsArray% has not been parsed properly.
    if (typeof first.components === 'string') {
      throw new Error('BUG: %pageSectionsArray% has not been parsed')
    }
    // specs.items.validations.0.linkContentType
    createIfMissing(workingField.specs, 'items', 'object')
    createIfMissing(workingField.specs.items, 'validations', 'array')
    workingField.specs.items!.validations!.push({
      linkContentType: first.components,
    })
  }
  if (first.component) {
    // specs.validations.0.linkContentType
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      linkContentType: [first.component],
    })
  }

  if (first.items) {
    // specs.validations.0.in
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      in: first.items,
    })
  }
  if (first.maxLength) {
    // specs.validations.0.size.max
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      size: {
        max: first.maxLength,
        min: 0,
      },
    })
  }
  if (first.unique) {
    // specs.validations.0.unique
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      unique: first.unique,
    })
  }

  return workingField
}
