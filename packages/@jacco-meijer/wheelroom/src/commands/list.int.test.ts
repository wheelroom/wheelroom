import { fixtureWheelroomConfig } from '../fixtures/wheelroom-config'

console.log('running fine', 'fixtureWheelroomConfig', fixtureWheelroomConfig)

test('Nested A', () => {
  expect('aa').toStrictEqual('aa')
})