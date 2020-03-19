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
 * - allowedComponents: string[] -> specs.validations.0.linkContentType
 * -                             -> specs.items.validations.0.linkContentType
 * - items: string[] -> specs.validations.0.in
 * -                 -> specs.items.validations.0.in
 * - maxLength?: number -> specs.validations.0.size.max
 * - unique?: boolean -> specs.validations.0.unique
 *
 */

import { FieldType, WheelroomComponents } from '@wheelroom/wheelroom'
import { ContentfulField } from '../../types/contentful-fields'
import { createIfMissing } from './merge-helpers'

interface MergeFields {
  cfFieldDefinition: ContentfulField
  componentName: string
  fieldName: string
  wrComponents: WheelroomComponents
  wrField: FieldType
}

export const mergeFields = (context: MergeFields): ContentfulField => {
  // Add optional settings object if not present
  if (!('settings' in context.cfFieldDefinition)) {
    context.cfFieldDefinition.settings = {}
  }

  const workingField: ContentfulField = {
    settings: {
      helpText:
        context.wrField.helpText ||
        (context.cfFieldDefinition.settings &&
          context.cfFieldDefinition.settings.helpText) ||
        '',
    },
    specs: {
      localized:
        context.wrField.localized ||
        context.cfFieldDefinition.specs.localized ||
        false,
      name:
        context.wrField.name ||
        context.cfFieldDefinition.specs.name ||
        'No name',
      required:
        context.wrField.required ||
        context.cfFieldDefinition.specs.required ||
        false,
      type: context.cfFieldDefinition.specs.type || 'Text',
    },
    widgetId: context.cfFieldDefinition.widgetId || 'singleLine',
  }

  // Handle initial content
  let createContentData
  if (context.wrField.initialContent) {
    createContentData = context.wrField.initialContent
  } else if (context.cfFieldDefinition.createContentData) {
    // No initial content configured, lookup field definition
    createContentData = context.cfFieldDefinition.createContentData
  }
  // Set demo asset if initial content of image type is true
  if (context.wrField.type === 'image' && context.wrField.initialContent) {
    createContentData = 'demoAsset'
  }
  Object.assign(workingField, { createContentData })

  // Handle specs.linkType
  const linkType = context.cfFieldDefinition.specs.linkType
  if (linkType) {
    workingField.specs.linkType = linkType
  }
  // Handle validations present in context.cfFieldDefinition.specs
  const validations = context.cfFieldDefinition.specs.validations
  if (validations) {
    createIfMissing(workingField.specs, 'validations', 'array')
    validations.forEach((validation: any) => {
      workingField.specs.validations!.push(Object.assign({}, validation))
    })
  }
  // Handle validations present in context.cfFieldDefinition.specs.items
  const itemsValidations =
    context.cfFieldDefinition.specs.items &&
    context.cfFieldDefinition.specs.items.validations
  if (itemsValidations) {
    createIfMissing(workingField.specs, 'items', 'object')
    createIfMissing(workingField.specs.items, 'validations', 'array')
    itemsValidations.forEach((validation: any) => {
      workingField.specs.items!.validations!.push(Object.assign({}, validation))
    })
  }

  // Handle specs.items
  // TODO: Do we need this? Only dropdown and checkbox fields have this
  const items = context.cfFieldDefinition.specs.items
  if (items) {
    workingField.specs.items = Object.assign({}, items)
  }

  // Process other validations

  // dropdown: specs.validations.0.in
  if (context.wrField.type === 'dropdown') {
    createIfMissing(workingField.specs, 'validations', 'array')
    workingField.specs.validations!.push({
      in: context.wrField.items,
    })
  }
  // checkbox: specs.items.validations.0.in
  if (context.wrField.type === 'checkbox') {
    createIfMissing(workingField.specs, 'items', 'object')
    createIfMissing(workingField.specs.items, 'validations', 'array')
    workingField.specs.items!.validations!.push({
      in: context.wrField.items,
    })
  }
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
