import chalk from 'chalk'
import { TypeData, PluginData } from './get-all-plugin-data/get-all-plugin-data'
import { WrVariable } from './parse-wr-variable'

export type CallCommand = 'push' | 'pull'
export type ArgvType = 'content' | 'models'

export interface CallHandler {
  callCommand: CallCommand
  callType: ArgvType
  path?: string
  pluginData?: PluginData
  pluginName: string
}

export type PushHandlerArgs = {
  callCommand: CallCommand
  callType: ArgvType
  pluginData?: {
    types: TypeData
    dataVar: WrVariable
  }
}

export type PushHandler = (args: PushHandlerArgs) => Promise<void>

export interface Module {
  handler?: PushHandler
}

export const callHandler = async ({
  callCommand,
  callType,
  pluginData,
  pluginName,
}: CallHandler) => {
  let module: Module = {}
  try {
    module = <Module>await import(pluginName)
  } catch (e) {
    console.log(chalk.red(`Could not find plugin: ${pluginName} (${e.code})`))
    return
  }

  if (module.handler) {
    await module.handler({ callCommand, callType, pluginData })
  } else {
    console.log(
      chalk.red(`Could not find handler method on plugin: ${pluginName}`)
    )
    return
  }
}
