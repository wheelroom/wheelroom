import {
  WheelroomComponent,
  WheelroomComponents,
} from '../../types/wheelroom-components'
import { WheelroomPluginArguments } from '../../types/wheelroom-plugin-arguments'

export const getFilteredComponents = (arv: WheelroomPluginArguments) => {
  let components = {} as WheelroomComponents
  if ('filter' in arv) {
    console.log(`Applying filter (componentName == ${arv.filter})`)
    Object.entries(arv.components as WheelroomComponents).forEach(
      ([name, component]: [string, WheelroomComponent]) => {
        if (name === arv.filter) {
          components[name] = component
        }
      }
    )
  } else {
    components = arv.components
  }
  if ('filter' in arv && Object.keys(components).length === 0) {
    console.log(
      `Warning, filter (componentName == ${arv.filter}) does not match any component`
    )
  }

  return components
}
