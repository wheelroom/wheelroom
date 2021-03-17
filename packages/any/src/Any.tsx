import { css, Interpolation, jsx, Theme } from '@emotion/react'
import React from 'react'
// import { Interpolation, Theme } from '@emotion/react'
import { anyReset } from './resets/any-reset'
import { elementResetMap } from './resets/element-reset-map'
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

export const AnyComponent: React.FC<any> = (props) => {
  const elementName = props.is || 'div'
  const attr = Object.assign({}, props)
  delete attr.is
  // Copy className to new element. This allows for creating components that
  // inherit styling from the base component.
  attr.className = props.className
  return jsx(elementName, attr, props.children)
}

export const Any: React.FC<any> = (props: any) => (
  <AnyComponent
    {...props}
    css={css([anyReset, elementResetMap[props.is || 'div']])}
  />
)
