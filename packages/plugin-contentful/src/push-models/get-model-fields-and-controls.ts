import chalk from 'chalk'
import { Control } from 'contentful-management/types'
import { WrInterface } from '@wheelroom/push/plain'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'
import { getModelField } from './get-model-field'
import { getModelControl } from './get-model-control'

export interface GetModelFieldsAndControls {
  modelFields: WrInterface['fields']
  validationsMap: ValidationsMap
}

export const getModelFieldsAndControls = ({
  modelFields,
  validationsMap,
}: GetModelFieldsAndControls) => {
  const controls: Control[] = []
  const fields = []
  const log = console.log
  for (const [fieldId, field] of Object.entries(modelFields!)) {
    log(chalk.underline(`${fieldId}`))
    const tags = field.tags || {}

    if ('@ignore' in tags) {
      log(chalk(`- ignoring field`))
      continue
    }
    if (!tags['@type']) {
      log(chalk.red(`- no @type inline tag`))
      continue
    }
    if (tags['@type'] === 'Link' && !tags['@linkType']) {
      log(chalk.red(`- @type=Link without @linkType`))
      continue
    }
    if (tags['@type'] === 'Array' && !tags['@itemsType']) {
      log(chalk.red(`- @type=Array without @itemsType`))
      continue
    }
    if (
      tags['@type'] === 'Array' &&
      tags['@itemsType'] === 'Link' &&
      !tags['@itemsLinkType']
    ) {
      log(chalk.red(`- @type=Array, @itemsType=Link without @itemsLinkType`))
      continue
    }

    const newField = getModelField({
      fieldId,
      fieldTags: tags,
      validationsMap,
    })
    if (newField) fields.push(newField)
    const newControl = getModelControl({ fieldId, fieldTags: tags })
    if (newControl) controls.push(newControl)
  }
  return { fields, controls }
}
