import { Arguments } from 'yargs'
import { PushArgv } from '../cli'
import { pushCommand } from './push'

const argv = {
  type: 'content',
  file: '',
  $0: '',
  _: [''],
} as Arguments<PushArgv>

describe('The push command should', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockClear()
  })

  test('report an error on file does not exist', async () => {
    argv.file = './src/commands/__fixtures/xxx.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toBeCalledWith('todo')
  })

  test('report an error on no tags', async () => {
    argv.file = './src/commands/__fixtures/topic-no-tags.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toBeCalledWith('todo')
  })

  test('report an error on plugin does not exist', async () => {
    argv.file = './src/commands/__fixtures/topic-plugin-does-not-exist.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toBeCalledWith('todo')
  })

  test('report an error on plugin tag is missing', async () => {
    argv.file = './src/commands/__fixtures/topic-plugin-tag-missing.ts'
    await pushCommand({ argv })
    expect(consoleSpy).toBeCalledWith('todo')
  })
})
