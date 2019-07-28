const myTest = () => {
  return true
}

test('My test', () => {
  expect(myTest()).toBe(true)
})
