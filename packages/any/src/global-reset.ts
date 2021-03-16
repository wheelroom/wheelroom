import { css } from '@emotion/react'

export const globalReset = css({
  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in iOS.
   */
  html: {
    lineHeight: 1.15,
    WebkitTextSizeAdjust: '100%',
  },
  /**
   * Remove the margin in all browsers.
   */
  body: {
    margin: 0,
  },
  /**
   * Add the correct display in IE 10.
   */
  '[hidden]': {
    display: 'none',
  },
})
