/**
 * Global reset
 */

import { htmlReset, bodyReset, hiddenReset } from './element-reset-map'

export const globalReset = {
  html: {
    ...(htmlReset as object),
  },
  body: {
    ...(bodyReset as object),
  },
  ...(hiddenReset as object),
}
