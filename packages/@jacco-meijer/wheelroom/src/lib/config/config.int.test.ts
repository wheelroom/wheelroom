import { fixtureWheelroomConfig } from '../../fixtures/wheelroom-config'

test('Config', () => {
  expect(fixtureWheelroomConfig.plugins.length).toStrictEqual(2)
})
