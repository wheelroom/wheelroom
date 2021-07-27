import chalk from 'chalk'
import { Control } from 'contentful-management/types'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'
import { getModelField } from './get-model-field'
import { getModelControl } from './get-model-control'

export interface GetModelFieldsAndControls {
  modelFields: { [fieldName: string]: Record<string, string> }
  validationsMap: ValidationsMap
}

export const getModelFieldsAndControls = ({
  modelFields,
  validationsMap,
}: GetModelFieldsAndControls) => {
  const controls: Control[] = []
  const fields = []
  const log = console.log
  for (const [fieldId, fieldTag] of Object.entries(modelFields)) {
    log(chalk.underline(`${fieldId}`))

    if ('@ignore' in fieldTag) {
      log(chalk(`- ignoring field`))
      continue
    }
    if (!fieldTag['@type']) {
      log(chalk.red(`- no @type inline tag`))
      continue
    }
    if (fieldTag['@type'] === 'Link' && !fieldTag['@linkType']) {
      log(chalk.red(`- @type=Link without @linkType`))
      continue
    }
    if (fieldTag['@type'] === 'Array' && !fieldTag['@itemsType']) {
      log(chalk.red(`- @type=Array without @itemsType`))
      continue
    }
    if (
      fieldTag['@type'] === 'Array' &&
      fieldTag['@itemsType'] === 'Link' &&
      !fieldTag['@itemsLinkType']
    ) {
      log(chalk.red(`- @type=Array, @itemsType=Link without @itemsLinkType`))
      continue
    }

    const newField = getModelField({
      fieldId,
      fieldTag,
      validationsMap,
    })
    if (newField) fields.push(newField)
    const newControl = getModelControl({ fieldId, fieldTag })
    if (newControl) controls.push(newControl)
  }
  return { fields, controls }
}
