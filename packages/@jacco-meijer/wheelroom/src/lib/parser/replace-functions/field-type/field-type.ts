/**
 * - %Field type%
 * - %field type%
 * - %fieldType%
 * - %FieldType%
 * - %field-type%
 *
 * Requires vars: fieldType
 *
 */

import { ReplaceFunctionsList, ReplaceVars } from '../../../../types/parser'
import { getCases } from '../../get-cases'

export const fieldTypeFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldType
        ? getCases(vars.fieldType).sentenceCase
        : 'bug-no-field-type',
    search: 'Field type',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldType
        ? getCases(vars.fieldType).pascalCase
        : 'bug-no-field-type',
    search: 'FieldType',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldType ? getCases(vars.fieldType).lowerCase : 'bug-no-field-type',
    search: 'field type',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldType ? getCases(vars.fieldType).kebabCase : 'bug-no-field-type',
    search: 'field-type',
  },
  {
    replace: (vars: ReplaceVars) =>
      vars.fieldType ? getCases(vars.fieldType).camelCase : 'bug-no-field-type',
    search: 'fieldType',
  },
]
