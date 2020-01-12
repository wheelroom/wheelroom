/**
 * - %Field name%
 * - %field name%
 * - %fieldName%
 * - %FieldName%
 * - %field-name%
 *
 * Requires arguments: fieldName
 *
 */

import {
  ReplaceFunctionsList,
  ReplaceParams,
  ReplaceVars,
} from '../../../types/parser'

export const fieldNameFunc: ReplaceFunctionsList = [
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldName
        ? vars.cases.fieldName.sentenceCase
        : 'bug-no-field-name',
    search: 'Field name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldName
        ? vars.cases.fieldName.pascalCase
        : 'bug-no-field-name',
    search: 'FieldName',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldName
        ? vars.cases.fieldName.lowerCase
        : 'bug-no-field-name',
    search: 'field name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldName
        ? vars.cases.fieldName.kebabCase
        : 'bug-no-field-name',
    search: 'field-name',
  },
  {
    replace: (vars: ReplaceVars, params: ReplaceParams) =>
      vars.cases.fieldName
        ? vars.cases.fieldName.camelCase
        : 'bug-no-field-name',
    search: 'fieldName',
  },
]
