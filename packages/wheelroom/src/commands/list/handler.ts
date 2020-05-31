import { getFilteredComponents } from '../../lib/config/get-filtered-components'
import { WheelroomComponent } from '../../types/wheelroom-components'
import { WheelroomPluginArguments } from '../../types/wheelroom-plugin-arguments'

export const handler = async (argv: WheelroomPluginArguments) => {
  const components = getFilteredComponents(argv)
  let fields
  Object.entries(components).forEach(
    ([componentName, component]: [string, WheelroomComponent]) => {
      fields = Object.keys(component.fields)
        .map((key: string) => {
          return key
        })
        .join('/')
      console.log(`============================
  Component:     ${componentName}
  Fields:        ${fields}
  asBoilerplate: ${component.settings.asBoilerplate ? 'Yes' : 'No'}
  asPageSection: ${component.settings.asPageSection ? 'Yes' : 'No'}
  asFragment:    ${component.settings.asFragment ? 'Yes' : 'No'}
  asQuery:       ${component.settings.asQuery}
  queryLimit:    ${component.settings.queryLimit || 'not present'}
  modelVersion:  ${component.modelVersion}
`)
    }
  )
}
