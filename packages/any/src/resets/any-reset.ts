/**
 * Any reset is replacing the Universal Box Sizing `*, *:before, *:after`
 * @see https://css-tricks.com/box-sizing/
 */

import { AnyStyle } from '../elements'

export const anyReset: AnyStyle = {
  boxSizing: 'border-box',
}
