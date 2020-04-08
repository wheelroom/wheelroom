import deepmerge from 'deepmerge'

const overwriteMerge = (destinationArray: any, sourceArray: any) => sourceArray

export const deepMerge = <T>(base: any, overwriteWith: T): T => {
  return deepmerge(base, overwriteWith, { arrayMerge: overwriteMerge })
}
