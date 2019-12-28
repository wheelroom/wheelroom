export const alias = (aliasName: string, realName: string): string => {
  console.log(aliasName, realName)
  return 'alias'
}

export const args = (argsData: object, queryData: object): string => {
  console.log(argsData, queryData)
  return 'arguments'
}

export const query = (queryName: string, queryData: object): string => {
  console.log(queryName, queryData)
  return 'query'
}
