import { Context } from '../../types/context'
import { ContentfulField } from '../../types/contentful-fields'
import { compareObjects } from './compare-objects'

// How details is the definition? The more detail, the higher the weight. In
// case if multiple definition matches, the one with the heighest weight is
// used.
const fieldDefWeight = (fieldDef: ContentfulField) => {
  let weight = 0
  if (fieldDef.settings && fieldDef.settings.helpText) {
    weight++
  }
  if (fieldDef.specs) {
    weight += Object.keys(fieldDef.specs).length
    if (fieldDef.specs.validations) {
      weight += fieldDef.specs.validations.length
    }
  }
  if (fieldDef.widgetId) {
    weight++
  }
  return weight
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
  let lastWeight = 0
  // Loop through fieldDefs and find object that matches thisFieldDef
  Object.entries(fieldDefs.fieldTypes).forEach(
    ([fieldType, fieldDef]: [string, ContentfulField]) => {
      // Does thisFieldDef have all fields present in fieldDef?
      if (compareObjects(thisFieldDef, fieldDef)) {
        const newWeight = fieldDefWeight(fieldDef)
        if (newWeight >= lastWeight) {
          Object.keys(addToObj).forEach((key: string) => {
            delete addToObj[key]
          })
          lastWeight = newWeight
        } else {
          return
        }
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
      }
    }
  )
}
