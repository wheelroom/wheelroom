export const getGraphqlFields = (fields: string[]) =>
  [...fields, 'variation']
    .sort()
    .map(
      (fieldName: string) => `    ${fieldName}
`
    )
    .join('')
