/**
 * Any reset is replacing the Universal Box Sizing `*, *:before, *:after`
 * @see https://css-tricks.com/box-sizing/
 */

import { CSSObject } from '@emotion/react'

export const anyReset: CSSObject = {
  boxSizing: 'border-box',
}
