jest.mock('../lib/call-handler', () => ({
  callHandler: jest.fn(),
}))

jest.mock('../lib/get-all-plugin-data', () => ({
  getAllPluginData: () => ({}),
}))

import chalk from 'chalk'
import { Arguments } from 'yargs'
import { PushArgv } from '../cli'
import { callHandler } from '../lib/call-handler'
import { pushCommand } from './push'

const argv = {
  type: 'content',
  file: '',
  $0: '',
  _: [''],
} as Arguments<PushArgv>

beforeEach(() => {
  jest.resetAllMocks()
})

describe('The push command should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

  beforeEach(() => {
    consoleSpy.mockClear()
  })

  test('report an error on file does not exist', async () => {
    argv.file = './src/commands/push.fixtures/xxx.ts'
    await pushCommand({ argv })

    expect(consoleSpy).toHaveBeenCalledWith(
      chalk.red('File not found: ./src/commands/push.fixtures/xxx.ts')
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })

  test('report nothing to process when file exists', async () => {
    argv.file = './src/commands/push.fixtures/dummy-file.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toHaveBeenCalledWith(
      chalk.red(
        'Nothing to process in file: ./src/commands/push.fixtures/dummy-file.ts'
      )
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })
})
