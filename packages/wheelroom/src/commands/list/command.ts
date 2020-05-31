/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { handler } from './handler'
import { WheelroomPluginArguments } from '../../types/wheelroom-plugin-arguments'

export const command = {
  aliases: ['ls'],
  command: 'list',
  describe: 'List component configs',
  handler: (argv: WheelroomPluginArguments) => {
    handler(argv)
  },
}
