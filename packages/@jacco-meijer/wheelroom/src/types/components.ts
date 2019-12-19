import { nodeModuleName } from './simple-types.js'

/** Passed to plugin for processing */
export interface Components {
  [componentName: string]: Component
}

export interface Component {
  /** Component data  */
  component: any
  /** Component options */
  options: any
  /** Module component was imported from */
  sourceModule: nodeModuleName
}
