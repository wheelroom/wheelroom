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
    const modelFields = wrType.interface.fieldTags || {}
    const interfaceTags = wrType.interface.interfaceTags || {}
    const typescriptInterfaceName = wrType.interface.typeName
    const interfaceTypeTag = interfaceTags['@type']

    log(chalk.bold(`\n${typescriptInterfaceName}`))
    if ('@ignore' in interfaceTags) {
      log(chalk(`- ignoring interface`))
      continue
    }
    if (!interfaceTypeTag) {
      log(chalk.red(`- no @type inline tag`))
      continue
    }

    const { fields, controls } = getModelFieldsAndControls({
      modelFields,
      validationsMap,
    })
    const contentTypeData = {
      name: interfaceTags['@name'] || interfaceTypeTag,
      description: interfaceTags['@description'],
      displayField: interfaceTags['@displayField'],
      fields,
    }

    log(chalk.bold(`\n-> Pushing to Contentful`))
    const contentType = await pushFieldsToContentful({
      contentTypeData,
      contentfulEnvironment,
      interfaceTypeTag,
    })

    await pushControlsToContentful({ contentType, controls })
  }
}
