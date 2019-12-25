import { fixtureWheelroomConfig } from '../../../../src/fixtures/wheelroom-config'

const myTestList = () => {
  return true
}

test('My test', () => {
  expect(fixtureWheelroomConfig.commonFields).toStrictEqual({ a: 'aa' })
})
