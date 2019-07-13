import { componentName, nodeModuleName } from './simple-types'

export interface ComponentToBeResolved {
  componentName: componentName
  options: any
}

export interface Resolvers {
  [moduleName: string]: ComponentToBeResolved[]
}

export interface WheelroomComponent {
  /** The module that exports the components array */
  resolve: nodeModuleName
  /** Component options */
  options: any
}

export interface Plugin {
  /** The module that exports the commands array */
  resolve: nodeModuleName
  /** Plugin options */
  options: any
}

export interface WheelroomConfig {
  /** Default value for componentName.resolve */
  defaultComponentResolve: nodeModuleName
  components: {
    [componentName: string]: WheelroomComponent
  }
  plugins: Plugin[]
}
