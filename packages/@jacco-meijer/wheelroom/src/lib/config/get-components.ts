import { ReplaceVars } from '../../types/parser'
import {
  WheelroomComponent,
  WheelroomComponents,
} from '../../types/wheelroom-components'
import { WheelroomConfig } from '../../types/wheelroom-config'
import { FieldType } from '../../types/wheelroom-fields'
import { createParser } from '../parser/create-parser'
import { replaceFunctions } from '../parser/replace-functions'

export const getComponents = async (wheelroomConfig: WheelroomConfig) => {
  if (
    !('components' in wheelroomConfig) ||
    typeof wheelroomConfig.components !== 'object'
  ) {
    console.log('error: components object not found in wheelroom config')
  }
  if (Object.entries(wheelroomConfig.components).length < 1) {
    console.log('error: no components found in wheelroom config')
  }
  const finalComponents = {} as WheelroomComponents
  // Create a parser
  const parser = createParser({
    components: wheelroomConfig.components,
  } as ReplaceVars)
  parser.addReplaceFunctions(replaceFunctions)

  Object.entries(wheelroomConfig.components).forEach(
    // Iterate over all components
    ([componentName, component]: [string, WheelroomComponent]) => {
      parser.updateVars({ component, componentName } as ReplaceVars)

      // Create a working copy for the component
      const workComponent = {
        fields: Object.assign({}, component.fields),
        modelVersion: component.modelVersion,
        settings: component.settings,
      } as WheelroomComponent

      // Merge in common fields
      Object.assign(workComponent.fields, wheelroomConfig.commonFields || {})

      Object.entries(workComponent.fields).forEach(
        // For each component, iterate over all fields
        ([fieldName, field]: [string, FieldType]) => {
          /**
           * Create a working copy of the field with default fields. System
           * fields are only used for building settings queries. We only need the
           * default type field for these.
           */
          let workField = {} as FieldType
          if (!field.system) {
            workField = Object.assign(
              {},
              wheelroomConfig.fieldDefaults.commonFieldDefaults || {}
            ) as FieldType
          }
          // Copy field type specific defaults
          Object.assign(
            workField,
            wheelroomConfig.fieldDefaults.fieldTypeDefaults[field.type]
          )
          // Copy field attributes to working copy
          Object.assign(workField, field)
          // Create an object for saving parse results
          const parseResults = {} as {
            [attr: string]: string | string[]
          }
          Object.entries(workField).forEach(
            // Parse variables of all strings
            ([key, value]: [string, string]) => {
              // Only parse strings and arrays of string
              if (typeof value !== 'string' && !Array.isArray(value)) {
                return
              }
              parser.updateVars({
                field,
                fieldName,
                fieldType: field.type,
              } as ReplaceVars)
              parseResults[key] = parser.parse(value)
            }
          )
          // Merge parse results to field working copy
          Object.assign(workField, parseResults)
          // Update component working copy with field working copy
          workComponent.fields[fieldName] = workField
        }
      )
      // Save working component copy to our object with final components
      finalComponents[componentName] = workComponent
    }
  )
  return finalComponents
}
