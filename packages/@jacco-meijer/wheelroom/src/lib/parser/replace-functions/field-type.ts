/**
 * - %Field type%
 * - %field type%
 * - %fieldType%
 * - %FieldType%
 * - %field-type%
 *
 * Requires arguments: fieldType
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../types/parser'

export const fieldTypeFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldType
        ? vars.cases.fieldType.sentenceCase
        : 'bug-no-field-type',
    search: 'Field type',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldType
        ? vars.cases.fieldType.pascalCase
        : 'bug-no-field-type',
    search: 'FieldType',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldType
        ? vars.cases.fieldType.lowerCase
        : 'bug-no-field-type',
    search: 'field type',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldType
        ? vars.cases.fieldType.kebabCase
        : 'bug-no-field-type',
    search: 'field-type',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldType
        ? vars.cases.fieldType.camelCase
        : 'bug-no-field-type',
    search: 'fieldType',
  },
]
