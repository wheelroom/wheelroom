// Import all replace functions and export them as one
import { componentNameFunc } from './component-name'
import { componentNameArrayFunc } from './component-name-array'
import { componentVarFunc } from './component-var'
import { fieldNameFunc } from './field-name'
import { fieldTypeFunc } from './field-type'
import { firstAllowedComponentFunc } from './first-allowed-component'
import { firstItemFunc } from './first-item'

export const replaceFunctions = [
  ...componentNameFunc,
  ...componentNameArrayFunc,
  ...componentVarFunc,
  ...fieldNameFunc,
  ...fieldTypeFunc,
  ...firstAllowedComponentFunc,
  ...firstItemFunc,
]
