import { getCompilerOptions } from './get-compiler-options'

describe('getCompilerOptions', () => {
  test('should get compiler options', async () => {
    expect(getCompilerOptions()).toMatchSnapshot()
  })
})
