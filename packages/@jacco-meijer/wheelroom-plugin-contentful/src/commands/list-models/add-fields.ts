import { Context } from '../../types/context'
import { ContentfulField } from '../../types/contentful-fields'

// Does test object have all required fields?
const compare = (testObject: any, requiredFields: any) => {
  for (const prop in requiredFields) {
    if (
      testObject.hasOwnProperty(prop) &&
      requiredFields.hasOwnProperty(prop)
    ) {
      if (
        requiredFields[prop] &&
        typeof testObject[prop] == 'object' &&
        typeof requiredFields[prop] == 'object'
      ) {
        if (!compare(testObject[prop], requiredFields[prop])) {
          return false
        }
      } else if (testObject[prop] != requiredFields[prop]) {
        return false
      }
    } else {
      return false
    }
  }
  return true
}

export const addFields = (
  context: Context,
  editorInterface: any,
  addToObj: any,
  field: any
) => {
  const thisFieldEditorInterface = editorInterface.controls.filter(
    (ei: any) => ei.fieldId === field.id
  )[0]
  const fieldDefs = context.pluginOptions.fieldDefinitions

  const thisFieldDef = {
    settings: {
      helpText:
        thisFieldEditorInterface.settings &&
        thisFieldEditorInterface.settings.helpText,
    },
    specs: {
      items: field.items,
      linkType: field.linkType,
      localized: field.localized,
      name: field.name,
      required: field.required,
      type: field.type,
      validations: field.validations,
    },
    widgetId: thisFieldEditorInterface.widgetId,
  }
  // Loop through fieldDefs and find object that matches thisFieldDef
  Object.entries(fieldDefs.fieldTypes).forEach(
    ([fieldType, fieldDef]: [string, ContentfulField]) => {
      // Does thisFieldDef have all fields present in fieldDef?
      if (compare(thisFieldDef, fieldDef)) {
        addToObj.type = fieldType
        if (fieldType === 'dropdown') {
          addToObj.items = field.validations[0].in
        }
        if (fieldType === 'multipleComponents') {
          addToObj.allowedComponents =
            field.items.validations[0].linkContentType
        }
        if (fieldType === 'singleComponent') {
          addToObj.allowedComponents = field.validations[0].linkContentType
        }
        if (fieldType === 'Dropdown') {
          addToObj.items = field.validations[0].in
        }
        if (field.required) {
          addToObj.required = true
        }
        if (field.localized) {
          addToObj.localized = true
        }
        if (field.unique) {
          addToObj.localized = true
        }
        if (field.name) {
          addToObj.name = field.name
        }
        // TODO: When multiple fields match, eg shortText and dropdown, choose wisely
        // Don't look any further
        // return
      }
    }
  )
}
