/** Get fields from a configured model */

export const componentInterfaceOnly = `/**
 * Component interface only
 *
 * Component type: %componentName%
 *
 */

import { FluidImage } from '../../views/image/image'

export interface %ComponentName%Props {
  /** Gatsby fetched data */
%reactProps(indent:2)%
}
`
