import chalk from 'chalk'
import { Control } from 'contentful-management/types'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'
import { getModelField } from './get-model-field'
import { getModelControl } from './get-model-control'

export interface GetModelFieldsAndControls {
  modelFields: { [fieldName: string]: Record<string, string> }
  validationsMap: ValidationsMap
  typescriptInterfaceName?: string
}

export const getModelFieldsAndControls = ({
  modelFields,
  validationsMap,
  typescriptInterfaceName,
}: GetModelFieldsAndControls) => {
  const controls: Control[] = []
  const fields = []
  const log = console.log
  for (const [fieldId, fieldTag] of Object.entries(modelFields)) {
    if ('@ignore' in fieldTag) {
      continue
    }
    if (!fieldTag['@type']) {
      log(
        chalk.red(`No @type inline tag:  ${typescriptInterfaceName}/${fieldId}`)
      )
      continue
    }
    if (fieldTag['@type'] === 'Link' && !fieldTag['@linkType']) {
      log(
        chalk.red(
          `@type=Link without @linkType: ${typescriptInterfaceName}/${fieldId}`
        )
      )
      continue
    }
    if (fieldTag['@type'] === 'Array' && !fieldTag['@itemsType']) {
      log(
        chalk.red(
          `@type=Array without @itemsType: ${typescriptInterfaceName}/${fieldId}`
        )
      )
      continue
    }
    if (
      fieldTag['@type'] === 'Array' &&
      fieldTag['@itemsType'] === 'Link' &&
      !fieldTag['@itemsLinkType']
    ) {
      log(
        chalk.red(
          `@type=Array, @itemsType=Link without @itemsLinkType:  ${typescriptInterfaceName}/${fieldId}`
        )
      )
      continue
    }

    const newField = getModelField({
      fieldId,
      fieldTag,
      validationsMap,
    })
    fields.push(newField)
    const newControl = getModelControl({ fieldId, fieldTag })
    if (newControl) {
      controls.push(newControl)
    }
  }
  return { fields, controls }
}
