import { TypeData } from '@wheelroom/push/plain'
import chalk from 'chalk'
import { CreateEntryProps, Environment } from 'contentful-management/types'
import { getContentfulLocales } from '../lib/get-contentful-locales'

export interface PushTypes {
  contentfulEnvironment: Environment
  typeData: TypeData
}

export const pushContent = async ({
  contentfulEnvironment,
  typeData,
}: PushTypes) => {
  const log = console.log
  const { defaultLocale } = await getContentfulLocales({
    contentfulEnvironment,
  })
  log(chalk(`- default locale ${defaultLocale}`))
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
        await contentfulEnvironment.createEntryWithId(
          interfaceTypeTag,
          `${wrVar.name} ${index}`,
          entryData
        )
      }
    }
  }
}
