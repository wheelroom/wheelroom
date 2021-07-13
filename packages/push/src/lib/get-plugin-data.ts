import ts from 'typescript'
import { parseWrInterface, WrInterface } from './parse-wr-interface'
import { parseWrVariable, WrVariable } from './parse-wr-variable'

export type TypeData = {
  [typeName: string]: {
    interface: WrInterface
    variables: WrVariable[]
  }
}

export type PluginData = {
  [pluginName: string]: {
    types: TypeData
    dataVar: WrVariable
  }
}

export interface GetPluginData {
  program: ts.Program
}

export const getPluginData = ({ program }: GetPluginData) => {
  const wrInterfaceList: PluginData = {}
  const checker = program.getTypeChecker()

  let dataVar = {}
  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.isDeclarationFile) continue
    console.log('========\nProcessing source file:', sourceFile.fileName)
    const wrInterfaces: WrInterface[] = []
    const wrVariables: WrVariable[] = []

    ts.forEachChild(sourceFile, (node: ts.Node) => {
      const wrInterface = parseWrInterface({ node, checker })
      if (wrInterface) wrInterfaces.push(wrInterface)
      const wrVariable = parseWrVariable({ node, sourceFile })
      if (wrVariable.name === 'wheelroomPluginData') {
        dataVar = wrVariable
      } else if (wrVariable.isArray && wrVariable.isExported) {
        wrVariables.push(wrVariable)
      } else if (!wrVariable.isArray) {
        console.log(
          `Warning: Skipping variable ${wrVariable.name} because it is not an array`
        )
      } else {
        if (!wrVariable.isExported)
          console.log(
            `Warning: Skipping variable ${wrVariable.name} because it is not exported`
          )
      }
    })
    // Order interfaces by interface and type
    for (const wrInterface of wrInterfaces) {
      const pluginName = (wrInterface?.interfaceTags || {})['@plugin']
      if (!pluginName) continue
      if (!wrInterface.typeName) continue
      if (!wrInterfaceList[pluginName])
        wrInterfaceList[pluginName] = {
          types: {},
          dataVar: {},
        }
      if (!wrInterfaceList[pluginName].types[wrInterface.typeName]) {
        wrInterfaceList[pluginName].types[wrInterface.typeName] = {
          interface: {},
          variables: [],
        }
      }

      wrInterfaceList[pluginName].types[wrInterface.typeName].interface =
        wrInterface
    }
    // Merge in variables
    for (const wrVariable of wrVariables) {
      let lookupSuccess = false
      for (const pluginData of Object.values(wrInterfaceList)) {
        const interfaceType = wrVariable.type || '<none>'
        if (Object.keys(pluginData.types).includes(interfaceType)) {
          pluginData.types[interfaceType].variables.push(wrVariable)
          lookupSuccess = true
        }
      }
      if (!lookupSuccess) {
        console.log(
          `Warning: Could not match variable ${wrVariable.name} with type ${wrVariable.type} to an interface`
        )
      }
    }
  }
  // Add dataVar to all plugins
  Object.values(wrInterfaceList).forEach(
    (pluginData) => (pluginData.dataVar = dataVar)
  )
  return wrInterfaceList
}
