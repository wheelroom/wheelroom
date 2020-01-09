/**
 * mergeFields
 *
 * Take a wheelroom field and convert it to a parsed Contentful field
 *
 * Process Wheelroom fields:
 *
 * - helpText?: string -> settings.helpText
 * - initialContent?:  string | number | boolean | string[] -> createContentData
 * - localized?: boolean -> specs.localized
 * - name?: string -> specs.name
 * - required?: boolean -> specs.required
 * - system?: boolean -> SKIP
 * - type?: FieldType -> REPLACE WITH DEFINITION
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

import { FieldType, parser, WheelroomComponents } from '@jacco-meijer/wheelroom'
import { ContentfulField, widgetID } from '../../types/contentful-fields'
import { createContentDataParser, createIfMissing } from './merge-helpers'

interface MergeFields {
  cfFieldDefaults: ContentfulField
  cfFieldDefinition: ContentfulField
  componentName: string
  fieldName: string
  wrComponents: WheelroomComponents
  wrField: FieldType
}

export const mergeFields = (context: MergeFields): ContentfulField => {
  // Hard coded system defaults as a last resort
  const lastResort = {
    helpText: '',
    localized: false,
    required: false,
    type: 'Symbol',
    widgetId: 'singleLine' as widgetID,
  }

  // Add optional settings object if not present
  if (!('settings' in context.cfFieldDefinition)) {
    context.cfFieldDefinition.settings = {}
  }
  if (!('settings' in context.cfFieldDefaults)) {
    context.cfFieldDefaults.settings = {}
  }
  // Parser shortcut with commandName and context.fieldName
  const preLoadedParser = (unparsed: string) =>
    parser(unparsed, {
      componentName: context.componentName,
      fieldName: context.fieldName,
    })

  const workingField: ContentfulField = {
    settings: {
      helpText: preLoadedParser(
        context.wrField.helpText ||
          context.cfFieldDefinition.settings!.helpText ||
          context.cfFieldDefaults.settings!.helpText ||
          lastResort.helpText
      ),
    },
    specs: {
      localized:
        context.wrField.localized ||
        context.cfFieldDefinition.specs.localized ||
        context.cfFieldDefaults.specs.localized ||
        lastResort.localized,
      name: preLoadedParser(
        context.wrField.name ||
          context.cfFieldDefinition.specs.name ||
          context.cfFieldDefaults.specs.name
      ),
      required:
        context.wrField.required ||
        context.cfFieldDefinition.specs.required ||
        context.cfFieldDefaults.specs.required ||
        lastResort.required,
      type:
        context.cfFieldDefinition.specs.type ||
        context.cfFieldDefaults.specs.type ||
        lastResort.type,
    },
    widgetId:
      context.cfFieldDefinition.widgetId ||
      context.cfFieldDefaults.widgetId ||
      lastResort.widgetId,
  }

  // Handle initial content, a if-then-tree because of the complex union type
  let createContentData
  if (context.wrField.initialContent) {
    createContentData = context.wrField.initialContent
    // }
  } else if (context.cfFieldDefinition.createContentData) {
    // No initial content configured, lookup field definition
    createContentData = context.cfFieldDefinition.createContentData
  } else if (context.cfFieldDefaults.createContentData) {
    // No value in field definition, check default values
    createContentData = context.cfFieldDefaults.createContentData
  }
  if (typeof createContentData === 'string') {
    createContentData = createContentDataParser(
      createContentData,
      context.wrField
    )
    createContentData = preLoadedParser(createContentData as string)
  }
  Object.assign(workingField, { createContentData })

  // Handle linkType
  const linkType =
    context.cfFieldDefinition.specs.linkType ||
    context.cfFieldDefaults.specs.linkType
  if (linkType) {
    workingField.specs.linkType = linkType
  }

  // Handle items
  const items =
    context.cfFieldDefinition.specs.items || context.cfFieldDefaults.specs.items
  if (items) {
    workingField.specs.items = Object.assign({}, items)
  }

  // Handle validations present in context.cfFieldDefinition or context.cfFieldDefaults components
  const validations =
    context.cfFieldDefinition.specs.validations ||
    context.cfFieldDefaults.specs.validations
  if (validations) {
    createIfMissing(workingField.specs, 'validations', 'array')
    validations.forEach((validation: any) => {
      workingField.specs.validations!.push(Object.assign({}, validation))
    })
  }
  // Process other validations
  // singleComponent: specs.validations.0.linkContentType
  if (context.wrField.type === 'singleComponent') {
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      linkContentType: context.wrField.allowedComponents,
    })
  }

  // multipleComponents: specs.items.validations.0.linkContentType
  if (context.wrField.type === 'multipleComponents') {
    createIfMissing(workingField.specs, 'items', 'object')
    createIfMissing(workingField.specs.items, 'validations', 'array')
    workingField.specs.items!.validations!.push({
      linkContentType: context.wrField.allowedComponents,
    })
  }

  if (context.wrField.type === 'dropdown') {
    // specs.validations.0.in
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      in: context.wrField.items,
    })
  }
  if (context.wrField.type === 'shortText' && context.wrField.maxLength) {
    // specs.validations.0.size.max
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      size: {
        max: context.wrField.maxLength,
        min: 0,
      },
    })
  }
  if (context.wrField.unique) {
    // specs.validations.0.unique
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      unique: context.wrField.unique,
    })
  }

  return workingField
}
