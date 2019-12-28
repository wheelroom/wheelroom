import { Component, Components } from '../../types/components'
import { Field } from '../../types/fields'
import { WheelroomConfig } from '../../types/wheelroom-config'
import { getAppDir } from '../get-app-dir'
import { parser } from '../parser/parser'
import { readConfig } from './read-config'

export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig(getAppDir())
  }
  if (
    !('components' in wheelroomConfig) ||
    typeof wheelroomConfig.components !== 'object'
  ) {
    console.log('error: components object not found in wheelroom config')
  }
  if (Object.entries(wheelroomConfig.components).length < 1) {
    console.log('error: no components found in wheelroom config')
  }

  const pageSectionsArray = Object.keys(wheelroomConfig.components).filter(
    (componentName: string) =>
      wheelroomConfig!.components[componentName].graphQL.pageSection
  )

  const finalComponents = {} as Components

  Object.entries(wheelroomConfig.components).forEach(
    // Iterate over all components
    ([componentName, component]: [string, Component]) => {
      // Create a working copy for the component
      const workComponent = {
        fields: Object.assign({}, component.fields),
        graphQL: component.graphQL,
        modelVersion: component.modelVersion,
      } as Component

      // Merge in common fields
      Object.assign(workComponent.fields, wheelroomConfig!.commonFields || {})

      Object.entries(workComponent.fields).forEach(
        // For each component, iterate over all fields
        ([fieldName, field]: [string, Field]) => {
          /**
           * Create a working copy of the field with default fields. System
           * fields are only used for building graphQL queries. We only need the
           * default type field for these.
           */
          let workField: Field
          if (field.system) {
            workField = { type: wheelroomConfig?.fieldDefaults.type }
          } else {
            workField = Object.assign({}, wheelroomConfig?.fieldDefaults || {})
          }
          // Copy field attributes to working copy
          Object.assign(workField, field)
          // Create an object for saving parse results
          const parseResults = {} as {
            [attr: string]: string | string[]
          }
          Object.entries(workField).forEach(
            // Parse variables of all strings
            ([key, value]: [string, string]) => {
              // Only parse strings
              if (typeof value !== 'string') {
                return
              }
              parseResults[key] = parser({
                componentName,
                fieldName,
                pageSectionsArray,
                unparsed: value,
              })
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
