import { WheelroomComponent } from '../../types/wheelroom-components'
import { getFilteredComponents } from './get-filtered-components'

export const handler = async (argv: any) => {
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
  Component:              ${componentName}
  Fields:                 ${fields}
  gQL asQuery:    ${component.settings.asQuery}
  gQL page section:       ${component.settings.asPageSection ? 'Yes' : 'No'}
  gQL fragment:           ${component.settings.asFragment ? 'Yes' : 'No'}
  gQL queryLimit:              ${component.settings.queryLimit || 'not present'}
  modelVersion:           ${component.modelVersion}
`)
    }
  )
}
