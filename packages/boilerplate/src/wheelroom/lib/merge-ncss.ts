import { NcssProps } from '../wheels/types'
import { mergeNcssTable } from './merge-ncss-table'

interface NcssObject {
  ncss: NcssProps
}
/**
 *
 * This helper merges Ncss objects.  The first object is the base, other objects
 * in the array are merged on top of the last result and will overwrite earlier
 * defined styling.
 *
 * Special attention is given to margin and padding. All margin and padding
 * styling is converted to the actual css properties xxLeft, xxRight, xxTop and
 * xxBottom. Then merged. That way margin and padding aliases like mx and mt are
 * properly overwritten.
 *
 */

export const mergeNcss = (ncssObjects: NcssObject[]): NcssObject => {
  const result = {}
  ncssObjects.forEach((ncssObject: NcssProps) => {
    if (!ncssObject.ncss) {
      return
    }
    Object.keys(ncssObject.ncss).forEach((key: string) => {
      if (mergeNcssTable[key]) {
        mergeNcssTable[key].forEach((cssProp: string) => {
          ncssObject.ncss[cssProp] = ncssObject.ncss[key]
        })
        delete ncssObject.ncss[key]
      }
    })
    Object.assign(result, ncssObject.ncss)
  })
  return { ncss: result }
}
