// import chalk from 'chalk'
import { pullCommand } from './pull'

describe('The pull command should', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
  beforeEach(() => {
    consoleSpy.mockReset()
  })

  test('have tests', async () => {
    await pullCommand({
      argv: { type: 'content', path: './dummy-path', $0: '', _: [''] },
    })
    expect(consoleSpy).toHaveBeenCalled()
  })
})
