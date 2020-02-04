// Does test object have all required fields?
export const compareObjects = (testObject: any, requiredFields: any) => {
  for (const prop in requiredFields) {
    if (
      testObject.hasOwnProperty(prop) &&
      requiredFields.hasOwnProperty(prop)
    ) {
      if (
        requiredFields[prop] &&
        typeof testObject[prop] == 'object' &&
        typeof requiredFields[prop] == 'object'
      ) {
        if (!compareObjects(testObject[prop], requiredFields[prop])) {
          return false
        }
      } else if (testObject[prop] != requiredFields[prop]) {
        return false
      }
    } else {
      return false
    }
  }
  return true
}
