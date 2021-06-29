import { WheelroomTags } from './parse-wheelroom-tags'

export interface CallPushHandler {
  wheelroomTags?: WheelroomTags
}

export type PushHandler = (args: { wheelroomTags?: WheelroomTags }) => void

export interface Module {
  pushHandler?: PushHandler
}

export const callPushHandler = async ({ wheelroomTags }: CallPushHandler) => {
  console.log(wheelroomTags)
  let module: Module = {}
  if (wheelroomTags?.plugin === 'contentful') {
    module = <Module>await import('@wheelroom/plugin-contentful/plain')
  }
  if (module.pushHandler && wheelroomTags) {
    module.pushHandler({ wheelroomTags })
  }
}
