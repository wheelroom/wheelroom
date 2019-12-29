# graphql-query-builder

## About

Small library to build graphQL queries dynamically.

## How does it work?

The library translates a javascript object into a GraphQL query string.

The object below:
```javascript
{
  fields: {
    firstName: {},
    lastName: {},
  },
  operationName: 'firstAndLastName',
  operationType: 'query',
}
```

Turns into:
```graphql
query firstAndLastName {
  firstName
  lastName
}
```

## Examples

See [jest test script](src/graphql-query-builder.int.test.ts) for a larger example.

```typescript
import {
  graphqlQueryBuilder as qb,
  Question,
} from '@jacco-meijer/graphql-query-builder'

const question: Question = {
  fields: {
    firstName: {
      arguments: {
        id: '4',
      },
    },
    lastName: {
      directive: {
        name: '@include',
        value: 'if: $withFriends',
      },
    },
  },
  operationType: 'query',
}

console.log(qb(question))
// query {
//  firstName(id: 4)
//  lastName @include(if: $withFriends)
// }
```

## Supported fields

Have a look into the [typescript definitions](./src/types/question.ts) for that.
