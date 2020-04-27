import { argvCommand } from '../../fixtures/argv-command'
import { command } from './command'

/**
 * Replacing content takes longer than the default 5 seconds max
 */
jest.setTimeout(60000)

describe('Command replace content should', () => {
  test('replace content set test', async () => {
    argvCommand._[0] = 'replace-content'
    argvCommand.contentSet = 'replaceTest'
    const spy = jest.spyOn(console, 'log')
    await command.handler(argvCommand as any)
    expect(spy).toBeCalled()
    spy.mockRestore()
  })
})
