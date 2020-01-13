// Import all replace functions and export them as one
import { componentNameArrayFunc } from './component-name-array/component-name-array'
import { componentNameFunc } from './component-name/component-name'
import { componentVarFunc } from './component-var/component-var'
import { fieldNameFunc } from './field-name/field-name'
import { fieldTypeFunc } from './field-type/field-type'
import { firstAllowedComponentFunc } from './first-allowed-component/first-allowed-component'
import { firstItemFunc } from './first-item/first-item'

export const replaceFunctions = [
  ...componentNameFunc,
  ...componentNameArrayFunc,
  ...componentVarFunc,
  ...fieldNameFunc,
  ...fieldTypeFunc,
  ...firstAllowedComponentFunc,
  ...firstItemFunc,
]
