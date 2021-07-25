import chalk from 'chalk'
import { TypeData } from './get-plugin-data'
import { WrVariable } from './parse-wr-variable'

export type CallType = 'pullModels' | 'pullContent'

export interface CallPullHandler {
  callType: CallType
  path: string
  pluginName: string
}

export type PullHandler = (args: {
  callType: CallType
  path: string
  pluginData?: {
    types: TypeData
    dataVar: WrVariable
  }
}) => Promise<void>

export interface Module {
  handler?: PullHandler
}

export const callPullHandler = async ({
  callType,
  pluginName,
  path,
}: CallPullHandler) => {
  const log = console.log
  const moduleName = pluginName.replace('"', '')
  let module: Module = {}
  try {
    module = <Module>await import(moduleName)
  } catch (e) {
    log(chalk.red(`Could not find plugin ${pluginName} => ${moduleName}`))
    return
  }

  if (module.handler) {
    await module.handler({ callType, path })
  } else {
    log(
      chalk.red(
        `Could not find "handler" method on plugin ${pluginName} => ${moduleName}`
      )
    )
    return
  }
}
