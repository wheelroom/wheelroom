import React from 'react'
import { Interpolation, Theme, css, jsx } from '@emotion/react'
import { anyReset } from './any-reset'
import { elementReset } from './element-reset'
/**
 * Extend JSX.IntrinsicElements with AnyProps: `is` and `css`
 */
export type AnyProps = {
  [K in keyof JSX.IntrinsicElements]: JSX.IntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: keyof JSX.IntrinsicElements
    /**
     * CSS interpolation from @emotion/react
     */
    css?: Interpolation<Theme> | Record<string, any>
  }
}

export const Any: React.FC<any> = (props) => {
  const elementName = props.is || 'div'
  const attr = Object.assign({}, props)
  delete attr.is
  // Copy className to new element. This allows for creating components that
  // inherit styling from the base component.
  attr.className = props.className
  attr.css = css([anyReset, elementReset[elementName]])
  return jsx(elementName, attr, props.children)
}
