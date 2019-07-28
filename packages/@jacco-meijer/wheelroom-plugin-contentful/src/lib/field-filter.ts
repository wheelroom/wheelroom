/** Returns filter function for Array.prototype.filter() */
export const fieldFilter = (modelOptions?: any) => (field: any) => {
  if (modelOptions && modelOptions.skipFields) {
    return !modelOptions.skipFields.includes(field)
  } else {
    return true
  }
}
