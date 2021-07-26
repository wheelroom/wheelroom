import chalk from 'chalk'
import { ArgvType } from '../cli'
import { TypeData, PluginData } from './get-all-plugin-data'
import { WrVariable } from './parse-wr-variable'

export interface CallHandler {
  callType: ArgvType
  callCommand: 'push' | 'pull'
  path?: string
  pluginData?: PluginData
  pluginName: string
}

export type PushHandler = (args: {
  callType: ArgvType
  pluginData?: {
    types: TypeData
    dataVar: WrVariable
  }
}) => Promise<void>

export interface Module {
  handler?: PushHandler
}

export const callHandler = async ({
  callType,
  pluginData,
  pluginName,
}: CallHandler) => {
  const moduleName = pluginName.replace(/"/g, '')
  let module: Module = {}
  try {
    module = <Module>await import(moduleName)
  } catch (e) {
    console.log(chalk.red(`Could not find plugin: ${moduleName}`))
    return
  }

  if (module.handler) {
    await module.handler({ pluginData, callType })
  } else {
    console.log(
      chalk.red(`Could not find "handler" method on plugin: ${moduleName}`)
    )
    return
  }
}
