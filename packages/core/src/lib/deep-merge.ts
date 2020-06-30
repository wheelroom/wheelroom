import deepmerge from 'deepmerge'

const overwriteMerge = (destinationArray: any, sourceArray: any) => sourceArray

/**
 *
 * Use this to apply custom styling. The first base object contains styling from
 * the wheelroom core. The second object contains the styling to overwrite.
 *
 * Note that arrays are replaced, while objects are merged.
 *
 */

export const deepMerge = <T>(arrayOfObjects: T[]): T => {
  return deepmerge.all(arrayOfObjects, { arrayMerge: overwriteMerge })
}
