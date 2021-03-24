/**
 * Global reset
 */

import { htmlReset, bodyReset, hiddenReset } from './element-reset-map'

export const globalReset = {
  html: {
    ...(htmlReset as Record<string, string>),
  },
  body: {
    ...(bodyReset as Record<string, string>),
  },
  ...(hiddenReset as Record<string, string>),
}
