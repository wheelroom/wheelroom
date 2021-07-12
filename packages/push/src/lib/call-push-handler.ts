import { TypeData, PluginData } from './get-plugin-data'

export type CallType = 'pushModels' | 'pushContent'

export interface CallPushHandler {
  callType: CallType
  pluginData: PluginData
}

export type PushHandler = (args: {
  callType: CallType
  typeData?: TypeData
}) => Promise<void>

export interface Module {
  handler?: PushHandler
}

export const callPushHandler = async ({
  pluginData,
  callType,
}: CallPushHandler) => {
  for (const pluginName of Object.keys(pluginData)) {
    let moduleName = ''
    if (pluginName === 'contentful') {
      moduleName = '@wheelroom/plugin-contentful/plain'
    }
    let module: Module = {}
    try {
      module = <Module>await import(moduleName)
    } catch (e) {
      console.log(`Could not find plugin ${pluginName} => ${moduleName}\n${e}`)
      process.exit(1)
    }

    if (module.handler) {
      await module.handler({ typeData: pluginData[pluginName], callType })
    } else {
      console.log(
        `Could not find "handler" method on plugin ${pluginName} => ${moduleName}`
      )
    }
  }
}
