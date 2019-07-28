const myTest2 = () => {
  return true
}

test('My test', () => {
  expect(myTest2()).toBe(true)
})
