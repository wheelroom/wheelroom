/**
 * - %Component name%
 * - %component name%
 * - %componentName%
 * - %ComponentName%
 * - %component-name%
 *
 * Requires vars: componentName
 *
 */

import { ReplaceFunctionsList, ReplaceVars } from '../../../../types/parser'
import { getCases } from '../../get-cases'

export const componentNameFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars) =>
      vars.componentName
        ? getCases(vars.componentName).sentenceCase
        : 'bug-no-component-name',
    search: 'Component name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.componentName
        ? getCases(vars.componentName).pascalCase
        : 'bug-no-component-name',
    search: 'ComponentName',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.componentName
        ? getCases(vars.componentName).lowerCase
        : 'bug-no-component-name',
    search: 'component name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.componentName
        ? getCases(vars.componentName).kebabCase
        : 'bug-no-component-name',
    search: 'component-name',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.componentName
        ? getCases(vars.componentName).camelCase
        : 'bug-no-component-name',
    search: 'componentName',
  },
]
