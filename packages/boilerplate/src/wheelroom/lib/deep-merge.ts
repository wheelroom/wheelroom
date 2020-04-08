import deepmerge from 'deepmerge'

const overwriteMerge = (destinationArray: any, sourceArray: any) => sourceArray

/**
 *
 * Use this to apply custom styling. The first base object contains styling from
 * the wheelroom core. The second object contains the styling to overwrite.
 *
 * Note that arrays are replaced, while objects are merged.
 *
 * Example overwriteWith: { topic: { wrapper: { p: 3 } } }
 *
 */

export const deepMerge = <T>(base: T, overwriteWith: T): T => {
  return deepmerge(base, overwriteWith, { arrayMerge: overwriteMerge })
}
