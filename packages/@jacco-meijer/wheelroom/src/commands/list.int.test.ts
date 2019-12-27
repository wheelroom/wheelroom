import { config } from '../fixtures/wheelroom-config'

test('List command', () => {
  expect(config.plugins.length).toStrictEqual(2)
})
