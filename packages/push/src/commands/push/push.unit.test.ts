jest.mock('../../lib/call-handler')
jest.mock('../../lib/get-all-plugin-data/get-all-plugin-data', () => ({
  getAllPluginData: () => ({}),
}))

import chalk from 'chalk'
import { Arguments } from 'yargs'
import { callHandler } from '../../lib/call-handler'
import { PushArgv, pushCommand } from './push'

const argv = {
  type: 'content',
  file: '',
  $0: '',
  _: [''],
} as Arguments<PushArgv>

describe('The push command should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('report an error on file does not exist', async () => {
    argv.file = './src/commands/push/__fixtures__/xxx.ts'
    await pushCommand({ argv })

    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('- file not found: ./src/commands/push/__fixtures__/xxx.ts')
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })

  test('report nothing to process when file exists', async () => {
    argv.file = './src/commands/push/__fixtures__/dummy-file.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red(
        '- nothing to process in file: ./src/commands/push/__fixtures__/dummy-file.ts'
      )
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })
})
