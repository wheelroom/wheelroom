import { Component, Components } from '../types/components.js'
import { Field, FieldType } from '../types/fields.js'
import { WheelroomConfig } from '../types/wheelroom-config.js'
import { parseVariables } from './parseVariables.js'
import { readConfig } from './read-config.js'

export const getComponents = async (wheelroomConfig?: WheelroomConfig) => {
  if (!wheelroomConfig) {
    wheelroomConfig = await readConfig()
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
      // Create a working copy of the component with all common fields
      const workComponent = {
        fields: Object.assign({}, wheelroomConfig!.commonFields || {}),
        graphQL: component.graphQL,
        modelVersion: component.modelVersion,
      } as Component

      Object.entries(component.fields).forEach(
        // For each component, iterate over all fields
        ([fieldName, field]: [string, Field]) => {
          // Copy default field to work with
          const workField: Field = Object.assign(
            { type: 'shortText' as FieldType },
            wheelroomConfig?.fieldDefaults || {}
          )
          // Copy field attributes to our working copy
          Object.assign(workField, field)
          // Create an object for upcomming parsing job
          const parseResults = {} as {
            [attr: string]: string | string[]
          }
          Object.entries(workField).forEach(
            // Parse variables of all strings to our parseResuls object
            ([key, value]: [string, string]) => {
              if (typeof value !== 'string') {
                return // Only parse strings
              }
              parseResults[key] = parseVariables({
                componentName,
                fieldName,
                pageSectionsArray,
                unparsed: value,
              })
            }
          )
          // Save field parse results to our working copy
          Object.assign(workField, parseResults)
          // Update working copy of component with our working field copy
          workComponent.fields[fieldName] = workField
        }
      )
      // Save working component copy to our object with final components
      finalComponents[componentName] = workComponent
    }
  )
  console.log(finalComponents)

  return finalComponents
}
