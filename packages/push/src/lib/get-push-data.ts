import ts from 'typescript'
import { parseWrInterface, WrInterface } from './parse-wr-interface'
import { parseWrVariable, WrVariable } from './parse-wr-variable'

export type PushData = {
  [pluginName: string]: {
    [typeName: string]: {
      interfaces: WrInterface[]
      variables: WrVariable[]
    }
  }
}

export interface GetPushData {
  program: ts.Program
}

export const getPushData = ({ program }: GetPushData) => {
  const wrInterfaceList: PushData = {}
  const checker = program.getTypeChecker()

  for (const sourceFile of program.getSourceFiles()) {
    if (sourceFile.isDeclarationFile) continue
    console.log('========\nProcessing source file:', sourceFile.fileName)
    const wrInterfaces: WrInterface[] = []
    const wrVariables: WrVariable[] = []

    ts.forEachChild(sourceFile, (node: ts.Node) => {
      const wrInterface = parseWrInterface({ node, checker })
      if (wrInterface) wrInterfaces.push(wrInterface)
      const wrVariable = parseWrVariable({ node, sourceFile })
      if (wrVariable.isArray && wrVariable.isExported)
        wrVariables.push(wrVariable)
      if (wrVariable.isObject)
        console.log(
          `Warning: Skipping variable ${wrVariable.name} because it is not an array`
        )
      if (wrVariable.isArray && !wrVariable.isExported)
        console.log(
          `Warning: Skipping variable ${wrVariable.name} because it is not exported`
        )
    })
    // Order interfaces by interface and typ
    for (const wrInterface of wrInterfaces) {
      if (!wrInterface.pluginName) continue
      if (!wrInterface.typeName) continue
      if (!wrInterfaceList[wrInterface.pluginName])
        wrInterfaceList[wrInterface.pluginName] = {}
      if (!wrInterfaceList[wrInterface.pluginName][wrInterface.typeName]) {
        wrInterfaceList[wrInterface.pluginName][wrInterface.typeName] = {
          interfaces: [],
          variables: [],
        }
      }

      wrInterfaceList[wrInterface.pluginName][
        wrInterface.typeName
      ].interfaces.push(wrInterface)
    }
    // Merge in variables
    for (const wrVariable of wrVariables) {
      let lookupSuccess = false
      for (const interfaceTypes of Object.values(wrInterfaceList)) {
        const interfaceType = wrVariable.type || ''
        if (Object.keys(interfaceTypes).includes(interfaceType)) {
          interfaceTypes[interfaceType].variables.push(wrVariable)
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
  return wrInterfaceList
}
