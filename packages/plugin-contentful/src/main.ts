import { inspect } from 'util'
import { PushHandler } from '@wheelroom/push/plain'

export const handler: PushHandler = async ({ callType, pushData }) => {
  console.log(
    'PLUGIN IS INSPECTING',
    callType,
    inspect(pushData, false, 10, true)
  )
  if (!pushData) return
  for (const wrType of Object.values(pushData)) {
    for (const wrVar of wrType.variables) {
      const valueText = wrVar.value || ''
      const valueArray = eval(valueText)
      console.log(
        'Data to send to platdform',
        inspect(valueArray, false, 10, true)
      )
    }
  }
}
