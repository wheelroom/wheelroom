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
 * - components: string[] -> specs.validations.0.linkContentType
 * -                      -> specs.items.validations.0.linkContentType
 * - items?: string[] -> specs.validations.0.in
 * - maxLength?: number -> specs.validations.0.size.max
 * - unique?: boolean -> specs.validations.0.unique
 *
 */

import { FieldType, parser } from '@jacco-meijer/wheelroom'
import { ContentfulField, widgetID } from '../../types/contentful-fields'
import { createContentDataParser, createIfMissing } from './merge-helpers'

export const mergeFields = (
  wheelroomField: FieldType,
  componentName: string,
  fieldName: string,
  contentfulFieldDefinition: ContentfulField,
  contentfulFieldDefaults: ContentfulField
): ContentfulField => {
  // Hard coded system defaults as a last resort
  const lastResort = {
    helpText: '',
    localized: false,
    required: false,
    type: 'Symbol',
    widgetId: 'singleLine' as widgetID,
  }

  // Add optional settings object if not present
  if (!('settings' in contentfulFieldDefinition)) {
    contentfulFieldDefinition.settings = {}
  }
  if (!('settings' in contentfulFieldDefaults)) {
    contentfulFieldDefaults.settings = {}
  }
  // Parser shortcut with commandName and fieldName
  const parseCompNamePlusFieldName = (unparsed: string) =>
    parser(unparsed, { componentName, fieldName })

  const workingField: ContentfulField = {
    settings: {
      helpText: parseCompNamePlusFieldName(
        wheelroomField.helpText ||
          contentfulFieldDefinition.settings!.helpText ||
          contentfulFieldDefaults.settings!.helpText ||
          lastResort.helpText
      ),
    },
    specs: {
      localized:
        wheelroomField.localized ||
        contentfulFieldDefinition.specs.localized ||
        contentfulFieldDefaults.specs.localized ||
        lastResort.localized,
      name: parseCompNamePlusFieldName(
        wheelroomField.name ||
          contentfulFieldDefinition.specs.name ||
          contentfulFieldDefaults.specs.name
      ),
      required:
        wheelroomField.required ||
        contentfulFieldDefinition.specs.required ||
        contentfulFieldDefaults.specs.required ||
        lastResort.required,
      type:
        contentfulFieldDefinition.specs.type ||
        contentfulFieldDefaults.specs.type ||
        lastResort.type,
    },
    widgetId:
      contentfulFieldDefinition.widgetId ||
      contentfulFieldDefaults.widgetId ||
      lastResort.widgetId,
  }

  // Handle initial content
  let createContentData
  if (wheelroomField.initialContent) {
    createContentData = wheelroomField.initialContent
  } else if (contentfulFieldDefinition.createContentData) {
    createContentData = contentfulFieldDefinition.createContentData
  } else if (contentfulFieldDefaults.createContentData) {
    createContentData = contentfulFieldDefaults.createContentData
  }
  if (typeof createContentData === 'string') {
    createContentData = createContentDataParser(
      createContentData,
      wheelroomField
    )
    createContentData = parseCompNamePlusFieldName(createContentData as string)
  }
  Object.assign(workingField, { createContentData })

  // Handle linkType
  const linkType =
    contentfulFieldDefinition.specs.linkType ||
    contentfulFieldDefaults.specs.linkType
  if (linkType) {
    workingField.specs.linkType = linkType
  }

  // Handle items
  const items =
    contentfulFieldDefinition.specs.items || contentfulFieldDefaults.specs.items
  if (items) {
    workingField.specs.items = Object.assign({}, items)
  }

  // Handle validations present in contentfulFieldDefinition or contentfulFieldDefaults components
  const validations =
    contentfulFieldDefinition.specs.validations ||
    contentfulFieldDefaults.specs.validations
  if (validations) {
    createIfMissing(workingField.specs, 'validations', 'array')
    validations.forEach((validation: any) => {
      workingField.specs.validations!.push(Object.assign({}, validation))
    })
  }
  // Process other validations
  // singleComponent: specs.validations.0.linkContentType
  if (wheelroomField.type === 'singleComponent') {
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      linkContentType: wheelroomField.allowedComponents,
    })
  }

  // multipleComponents: specs.items.validations.0.linkContentType
  if (wheelroomField.type === 'multipleComponents') {
    createIfMissing(workingField.specs, 'items', 'object')
    createIfMissing(workingField.specs.items, 'validations', 'array')
    workingField.specs.items!.validations!.push({
      linkContentType: wheelroomField.allowedComponents,
    })
  }

  if (wheelroomField.type === 'dropdown') {
    // specs.validations.0.in
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      in: wheelroomField.items,
    })
  }
  if (wheelroomField.type === 'shortText' && wheelroomField.maxLength) {
    // specs.validations.0.size.max
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      size: {
        max: wheelroomField.maxLength,
        min: 0,
      },
    })
  }
  if (wheelroomField.unique) {
    // specs.validations.0.unique
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      unique: wheelroomField.unique,
    })
  }

  return workingField
}
