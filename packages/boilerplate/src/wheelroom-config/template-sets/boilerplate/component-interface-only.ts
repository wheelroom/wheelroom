/** Get fields from a configured model */

export const componentInterfaceOnly = `/**
 * Component interface only
 *
 * Component type: %componentName%
 *
 */

import { MediaGatsbyModel } from '@wheelroom/core'

export interface %ComponentName%Props {
  /** Gatsby fetched data */
%reactProps(indent:2)%
}
`
