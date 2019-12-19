export const getGraphqlFields = (fields) =>
  [...fields, 'variation']
    .sort()
    .map(
      (fieldName) => `    ${fieldName}
`
    )
    .join('')
