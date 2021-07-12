import { WrInterface } from './parse-wr-interface'
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
    [typeName: string]: {
      interfaces: WrInterface[]
      variables: WrVariable[]
    }
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
    await module.handler({ callType, path })
  } else {
    console.log(
      `Could not find "handler" method on plugin ${pluginName} => ${moduleName}`
    )
  }
}
