import { args, query } from './graphql-query-builder'

test('Query', async () => {
  const testQuery = {
    user: args(
      { name: 'jan' },
      {
        address: {
          city: '',
          image: args({ maxWidth: 1024 }, { name: '', src: '' }),
          street: '',
        },
        firstName: '',
        lastName: '',
      }
    ),
  }
  const runQuery = query('queryDemo', testQuery)
  const expectedResult = `
  query {
    user(id: 1) {
      id
      name
      bankAccount {
        id
        branch
      }
    }
  }
`

  expect(runQuery).toEqual(expectedResult)
})
