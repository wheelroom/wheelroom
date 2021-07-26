import chalk from 'chalk'
import { TypeData } from '@wheelroom/push/plain'
import { Environment } from 'contentful-management/types'
import { ValidationsMap } from './get-wheelroom-plugin-data'
import { getModelsFieldsAndControls } from './get-models-fields-and-controls'
import { pushModelToContentful } from './push-model-to-contentful'

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

    const { fields, controls } = getModelsFieldsAndControls({
      interfaceFieldTags,
      validationsMap,
      wrType,
    })
    const contentTypeData = {
      name:
        interfaceTags['@name'] ||
        interfaceTags['@type'] ||
        wrType.interface.typeName ||
        'No name',
      description: interfaceTags['@description'],
      displayField: interfaceTags['@displayField'],
      fields,
    }
    const contentType = await pushModelToContentful({
      contentTypeData,
      interfaceTags,
      contentfulEnvironment,
    })

    console.log(chalk.red(`Contentful API, updating editor interface`))
    const editorInterface = await contentType.getEditorInterface()
    editorInterface.controls = controls
    await editorInterface.update()
  }
}
