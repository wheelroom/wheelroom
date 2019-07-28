/** Returns filter function for Array.prototype.filter() */
export const fieldFilter = (modelOptions?: any) => ([fieldId]: [
  string,
  any
]) => {
  if (modelOptions && modelOptions.skipFields) {
    const skipThisField = modelOptions.skipFields.includes(fieldId)
    if (skipThisField) {
      console.log(`Skipping field ${fieldId}`)
      return false
    }
  }
  return true
}
