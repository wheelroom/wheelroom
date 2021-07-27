import { TypeData } from '@wheelroom/push/plain'
import chalk from 'chalk'
import { CreateEntryProps, Environment } from 'contentful-management/types'
import { getContentfulEnvironment } from '../lib/get-contentful-environment'

export interface PushTypes {
  contentfulEnvironment: Environment
  typeData: TypeData
}

export const pushContent = async ({ typeData }: PushTypes) => {
  // Test with env for now
  const env = await getContentfulEnvironment()
  const log = console.log
  for (const wrType of Object.values(typeData)) {
    const interfaceTags = wrType.interface.interfaceTags || {}
    const typescriptInterfaceName = wrType.interface.typeName
    const interfaceTypeTag = interfaceTags['@type']

    log(chalk.bold.underline(`\n${typescriptInterfaceName}`))
    if ('@ignore' in interfaceTags) {
      log(chalk(`- ignoring interface`))
      continue
    }
    if (!interfaceTypeTag) {
      log(chalk.red(`- no @type inline tag`))
      continue
    }

    for (const wrVar of wrType.variables) {
      const valueFn = new Function(`return ${wrVar.value}`)
      const valueArray = valueFn()
      console.info('Data to send to Contentful', valueArray)
      for (const [value, index] of valueArray.entries()) {
        const entryData: CreateEntryProps = {
          fields: value,
        }
        await env.createEntryWithId(
          interfaceTypeTag,
          `${wrVar.name} ${index}`,
          entryData
        )
      }
    }
  }
}
