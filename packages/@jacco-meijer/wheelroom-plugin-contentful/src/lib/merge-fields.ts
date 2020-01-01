import { Field as WheelroomField } from '@jacco-meijer/wheelroom'
import { Field as ContentfulField, widgetID } from '../types/fields'
import { parser } from './parser'

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
 * - components: string | string[] -> specs.items.validations.0.linkContentType
 * - items?: string[] -> specs.validations.0.in
 * - maxLength?: number -> specs.validations.0.size.max
 * - unique?: boolean -> specs.validations.0.unique
 *
 */

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

  // Hard coded system defaults
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
      initialContent = parse(initialContent)
    }
    Object.assign(workingField, { initialContent })
  }

  // Process validations
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

// Helper to add object or array if needed
const createIfMissing = (base: any, key: string, what: 'object' | 'array') => {
  if (key in base) {
    return base
  } else {
    base[key] = what === 'object' ? {} : []
    return base
  }
}
