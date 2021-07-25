import chalk from 'chalk'
import { TypeData, PluginData } from './get-plugin-data'
import { WrVariable } from './parse-wr-variable'

export type CallType = 'pushModels' | 'pushContent'

export interface CallPushHandler {
  callType: CallType
  pluginData: PluginData
}

export type PushHandler = (args: {
  callType: CallType
  pluginData?: {
    types: TypeData
    dataVar: WrVariable
  }
}) => Promise<void>

export interface Module {
  handler?: PushHandler
}

export const callPushHandler = async ({
  pluginData,
  callType,
}: CallPushHandler) => {
  for (const pluginName of Object.keys(pluginData)) {
    const moduleName = pluginName.replace(/"/g, '')
    let module: Module = {}
    try {
      module = <Module>await import(moduleName)
    } catch (e) {
      console.log(chalk.red(`Could not find plugin: ${moduleName}`))
      return
    }

    if (module.handler) {
      await module.handler({ pluginData: pluginData[moduleName], callType })
    } else {
      console.log(
        chalk.red(`Could not find "handler" method on plugin: ${moduleName}`)
      )
      return
    }
  }
}
