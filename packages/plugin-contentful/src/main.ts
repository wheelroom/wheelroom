import { PushHandler } from '@wheelroom/push/plain'

export const pushHandler: PushHandler = ({ wheelroomTags }) => {
  console.log('Processing', wheelroomTags)
}
