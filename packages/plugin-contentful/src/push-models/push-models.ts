import chalk from 'chalk'
import { TypeData } from '@wheelroom/push/plain'
import { Environment } from 'contentful-management/types'
import { ValidationsMap } from '../lib/get-wheelroom-plugin-data'
import { getModelFieldsAndControls } from './get-model-fields-and-controls'
import { pushFieldsToContentful } from './push-fields-to-contentful'
import { pushControlsToContentful } from './push-controls-to-contentful'

export interface PushTypes {
  contentfulEnvironment: Environment
  typeData: TypeData
  validationsMap: ValidationsMap
}

export const pushModels = async ({
  contentfulEnvironment,
  typeData,
  validationsMap,
}: PushTypes) => {
  const log = console.log
  for (const wrType of Object.values(typeData)) {
    const interfaceFieldTags = wrType.interface.fieldTags || {}
    const interfaceTags = wrType.interface.interfaceTags || {}

    log(chalk.bold(`Type: ${wrType.interface.typeName}...`))
    if ('@ignore' in interfaceTags) {
      continue
    }
    if (!interfaceTags['@type']) {
      log(chalk.red(`No @type inline tag: ${wrType.interface.typeName}`))
      continue
    }

    const { fields, controls } = getModelFieldsAndControls({
      interfaceFieldTags,
      validationsMap,
      wrType,
    })
    const interfaceType = interfaceTags['@type']
    const contentTypeData = {
      name:
        interfaceTags['@name'] ||
        interfaceType ||
        wrType.interface.typeName ||
        'No name',
      description: interfaceTags['@description'],
      displayField: interfaceTags['@displayField'],
      fields,
    }
    const contentType = await pushFieldsToContentful({
      contentTypeData,
      contentfulEnvironment,
      interfaceType,
    })

    await pushControlsToContentful({ contentType, controls })
  }
}
