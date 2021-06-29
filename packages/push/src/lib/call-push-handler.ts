import { WheelroomTags } from './parse-wheelroom-tags'

export interface CallPushHandler {
  wheelroomTags?: WheelroomTags
}

export type PushHandler = (args: { wheelroomTags?: WheelroomTags }) => void

export interface Module {
  pushHandler?: PushHandler
}

export const callPushHandler = async ({ wheelroomTags }: CallPushHandler) => {
  let moduleName = ''
  if (wheelroomTags?.plugin === 'contentful') {
    moduleName = '@wheelroom/plugin-contentful/plain'
  }
  let module: Module = {}
  try {
    module = <Module>await import(moduleName)
  } catch (e) {
    console.log(
      `Could not find plugin ${wheelroomTags?.plugin} => ${moduleName}`
    )
  }

  if (module.pushHandler && wheelroomTags) {
    module.pushHandler({ wheelroomTags })
  }
}
