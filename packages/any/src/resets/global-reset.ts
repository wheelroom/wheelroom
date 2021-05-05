/**
 * Global reset
 */

import { htmlReset, bodyReset, hiddenReset } from './element-reset-map'

export const globalReset = {
  html: htmlReset,
  body: bodyReset,
  '[hidden]': hiddenReset,
}
