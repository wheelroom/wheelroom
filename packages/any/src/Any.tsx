import React from 'react'
import { Interpolation, Theme, css, jsx } from '@emotion/react'
import { anyReset, elementReset } from './resets'

/**
 * Export type AnyProperties: `is` and `css`
 */
export interface AnyProperties {
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: keyof JSX.IntrinsicElements
  /**
   * CSS interpolation from @emotion/react
   */
  css?: Interpolation<Theme> | Object
}

export const Any: React.FC<any> = (props) => {
  const elementName = props.is || 'div'
  const attr = Object.assign({}, props)
  delete attr.is
  attr.className = props.className // This is where the magic happens!
  attr.css = css([anyReset, elementReset[elementName]])
  return jsx(elementName, attr, props.children)
}
