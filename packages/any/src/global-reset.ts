/**
 * Global reset
 */

import { htmlReset, bodyReset, hiddenReset } from './element-reset'

export const globalReset = {
  html: {
    ...htmlReset,
  },
  body: {
    ...bodyReset,
  },
  ...hiddenReset,
}
