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
  gQL createPageQuery:    ${component.graphQL.createPageQuery}
  gQL page section:       ${component.graphQL.pageSection ? 'Yes' : 'No'}
  gQL fragment:           ${component.graphQL.fragment ? 'Yes' : 'No'}
  gQL limit:              ${component.graphQL.limit || 'not present'}
  modelVersion:           ${component.modelVersion}
`)
    }
  )
}
