/**
 * - %Component name%
 * - %component name%
 * - %componentName%
 * - %ComponentName%
 * - %component-name%
 *
 * Requires arguments: componentName
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../types/parser'

export const componentNameFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.componentName
        ? vars.cases.componentName.sentenceCase
        : 'bug-no-component-name',
    search: 'Component name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.componentName
        ? vars.cases.componentName.pascalCase
        : 'bug-no-component-name',
    search: 'ComponentName',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.componentName
        ? vars.cases.componentName.lowerCase
        : 'bug-no-component-name',
    search: 'component name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.componentName
        ? vars.cases.componentName.kebabCase
        : 'bug-no-component-name',
    search: 'component-name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.componentName
        ? vars.cases.componentName.camelCase
        : 'bug-no-component-name',
    search: 'componentName',
  },
]
