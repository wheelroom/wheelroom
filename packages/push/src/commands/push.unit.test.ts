jest.mock('../lib/call-handler', () => ({
  callHandler: jest.fn(),
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

  test('report an error on no tags', async () => {
    argv.file = './src/commands/push.fixtures/topic-no-tags.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      chalk.bold.underline(
        'Processing source file: src/commands/push.fixtures/topic-no-tags.ts'
      )
    )
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('No TSDoc tags: Topic')
    )
    expect(consoleSpy).toHaveBeenNthCalledWith(
      3,
      chalk.red(
        'Nothing to process in file: ./src/commands/push.fixtures/topic-no-tags.ts'
      )
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })

  test('pass the plugin data when plugin does not exist', async () => {
    argv.file = './src/commands/push.fixtures/topic-plugin-does-not-exist.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      chalk.bold.underline(
        'Processing source file: src/commands/push.fixtures/topic-plugin-does-not-exist.ts'
      )
    )
    expect(callHandler).toHaveBeenLastCalledWith({
      callCommand: 'push',
      callType: 'content',
      pluginData: {
        dataVar: {},
        types: {
          Topic: {
            interface: {
              fieldTags: { heading: { '@ignore': '' } },
              interfaceTags: {
                '@plugin': '"@wheelroom/does-not-exist"',
                '@type': 'topic',
              },
              typeName: 'Topic',
            },
            variables: [],
          },
        },
      },
      pluginName: '"@wheelroom/does-not-exist"',
    })
  })

  test('report an error on plugin tag is missing', async () => {
    argv.file = './src/commands/push.fixtures/topic-plugin-tag-missing.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      chalk.bold.underline(
        'Processing source file: src/commands/push.fixtures/topic-plugin-tag-missing.ts'
      )
    )
    expect(consoleSpy).toHaveBeenNthCalledWith(
      2,
      chalk.red('No @plugin inline tag: Topic')
    )
    expect(consoleSpy).toHaveBeenNthCalledWith(
      3,
      chalk.red(
        'Nothing to process in file: ./src/commands/push.fixtures/topic-plugin-tag-missing.ts'
      )
    )
    expect(callHandler).toHaveBeenCalledTimes(0)
  })
})
