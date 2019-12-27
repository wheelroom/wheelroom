import { fixtureWheelroomConfig } from '../../fixtures/wheelroom-config'

test('Parser', () => {
  expect(fixtureWheelroomConfig.plugins.length).toStrictEqual(2)
})
