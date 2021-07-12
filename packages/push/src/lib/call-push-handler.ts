import { PushData } from './get-push-data'
import { WrInterface } from './parse-wr-interface'
import { WrVariable } from './parse-wr-variable'

export type CallType = 'pushModels' | 'pushContent'

export interface CallPushHandler {
  callType: CallType
  pushData: PushData
}

export type PushHandler = (args: {
  callType: CallType
  pushData?: {
    [typeName: string]: {
      interfaces: WrInterface[]
      variables: WrVariable[]
    }
  }
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
      console.log(`Could not find plugin ${pluginName} => ${moduleName}`)
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
