/**
 * Any reset is replacing the Universal Box Sizing `*, *:before, *:after`
 * @see https://css-tricks.com/box-sizing/
 */

import { Interpolation, Theme } from '@emotion/react'
export type AnyReset = Interpolation<Theme>

export const anyReset: AnyReset = {
  boxSizing: 'border-box',
}
