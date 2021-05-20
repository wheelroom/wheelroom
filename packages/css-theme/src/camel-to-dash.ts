// Convert camelCase to lower-case-dash
export const camelToDash = (str: string) => {
  return str
    .replace(/\W+/g, '-')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase()
}
