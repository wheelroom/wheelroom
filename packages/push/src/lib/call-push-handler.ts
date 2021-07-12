import { InterfaceData, PushData } from './get-push-data'

export type CallType = 'pushModels' | 'pushContent'

export interface CallPushHandler {
  callType: CallType
  pushData: PushData
}

export type PushHandler = (args: {
  callType: CallType
  pushData?: InterfaceData
}) => Promise<void>

export interface Module {
  handler?: PushHandler
}

export const callPushHandler = async ({
  pushData,
  callType,
}: CallPushHandler) => {
  for (const pluginName of Object.keys(pushData)) {
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
      await module.handler({ pushData: pushData[pluginName], callType })
    } else {
      console.log(
        `Could not find "handler" method on plugin ${pluginName} => ${moduleName}`
      )
    }
  }
}
