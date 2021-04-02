import { Interpolation, jsx, Theme } from '@emotion/react'
import { AnyStyle } from './elements'
import { anyReset } from './resets/any-reset'
import { elementResetMap, ElementResetName } from './resets/element-reset-map'

type JSXIntrElName = keyof JSX.IntrinsicElements

/**
 * Extend JSX.IntrinsicElements with AnyProps: `is` and `css`
 */
export type AnyProps = {
  [K in JSXIntrElName]: JSX.IntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: JSXIntrElName
    /**
     * CSS interpolation from @emotion/react
     */
    css?: Interpolation<Theme>
  }
}

export const AnyComponent: React.FC<any> = (props) => {
  console.log('SRC')
  const elementName: ElementResetName = props.is || 'div'
  const attr = Object.assign({}, props)
  delete attr.is
  // Copy className to new element. This allows for creating components that
  // inherit styling from the base component.
  attr.className = props.className
  return jsx(elementName, attr, props.children)
}

export const Any: React.FC<any> = (props: any) => {
  console.log('SRC')
  const elementName: ElementResetName = props.is || 'div'
  const elementReset: AnyStyle = elementResetMap[elementName]
  return <AnyComponent {...props} css={[anyReset, elementReset, props.css]} />
}
