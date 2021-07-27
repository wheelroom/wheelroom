import ts from 'typescript'
import chalk from 'chalk'
import { parseWrInterface, WrInterface } from '../parse-wr-interface'
import { parseWrVariable, WrVariable } from '../parse-wr-variable'

export type WrType = {
  interface: WrInterface
  variables: WrVariable[]
}

export type TypeData = {
  [typeName: string]: WrType
}

export type PluginData = {
  types: TypeData
  dataVar: WrVariable
}

export type AllPluginData = {
  [pluginName: string]: PluginData
}

export interface GetPluginData {
  program: ts.Program
}

export const getAllPluginData = ({ program }: GetPluginData) => {
  const allPluginData: AllPluginData = {}
  const checker = program.getTypeChecker()
  const log = console.log

  let dataVar = {}
  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.isDeclarationFile) continue
    log(chalk.underline(sourceFile.fileName))
    const wrInterfaces: WrInterface[] = []
    const wrVariables: WrVariable[] = []

    ts.forEachChild(sourceFile, (node: ts.Node) => {
      const wrInterface = parseWrInterface({ node, checker })
      if (wrInterface) wrInterfaces.push(wrInterface)
      const wrVariable = parseWrVariable({ node, sourceFile })
      if (wrVariable.name === 'wheelroomPluginData') {
        dataVar = wrVariable
      } else if (
        wrVariable.name &&
        wrVariable.isArray &&
        wrVariable.isExported
      ) {
        wrVariables.push(wrVariable)
      } else if (wrVariable.name && !wrVariable.isArray) {
        log(chalk.blue(`- content variable, not an array: ${wrVariable.name}`))
      } else {
        if (wrVariable.name && !wrVariable.isExported)
          log(
            chalk.blue(`- content variable, not exported: ${wrVariable.name}`)
          )
      }
    })
    // Order interfaces by interface and type
    for (const wrInterface of wrInterfaces) {
      const pluginName = (wrInterface?.interfaceTags || {})['@plugin']
      if (!pluginName) continue
      if (!wrInterface.typeName) continue
      if (!allPluginData[pluginName])
        allPluginData[pluginName] = {
          types: {},
          dataVar: {},
        }
      if (!allPluginData[pluginName].types[wrInterface.typeName]) {
        allPluginData[pluginName].types[wrInterface.typeName] = {
          interface: {},
          variables: [],
        }
      }

      allPluginData[pluginName].types[wrInterface.typeName].interface =
        wrInterface
    }
    // Merge in variables
    for (const wrVariable of wrVariables) {
      let lookupSuccess = false
      for (const pluginData of Object.values(allPluginData)) {
        const interfaceType = wrVariable.type || '<none>'
        if (Object.keys(pluginData.types).includes(interfaceType)) {
          pluginData.types[interfaceType].variables.push(wrVariable)
          lookupSuccess = true
        }
      }
      if (!lookupSuccess) {
        log(
          chalk.blue(
            `- content variable, no type match: ${wrVariable.type}/${wrVariable.name}`
          )
        )
      }
    }
  }
  // Add dataVar to all plugins
  Object.values(allPluginData).forEach(
    (pluginData) => (pluginData.dataVar = dataVar)
  )
  return allPluginData
}
