import { pullCommand } from './pull'

describe('The pull command should', () => {
  const consoleSpy = jest.spyOn(console, 'error').mockImplementation()
  test('report an error on non existing plugin', async () => {
    await pullCommand({
      argv: { type: 'content', path: './dummy-path', $0: '', _: [''] },
    })
    expect(consoleSpy).toBeCalledTimes(1)
  })
  consoleSpy.mockClear()
})
