import { fixtureWheelroomConfig } from '../fixtures/wheelroom-config'

test('List command', () => {
  expect(fixtureWheelroomConfig.plugins.length).toStrictEqual(2)
})
