import { CSSObject, jsx } from '@emotion/react'
import { anyReset } from './resets/any-reset'
import { elementResetMap, ElementResetName } from './resets/element-reset-map'

type JSXIntrElName = keyof jsx.JSX.IntrinsicElements

/**
 * Extend JSX.IntrinsicElements with AnyProps: `is` and `css`
 */
export type AnyProps = {
  [K in JSXIntrElName]: jsx.JSX.IntrinsicElements[K] & {
    /**
     * Specify that a standard HTML element should behave like a defined custom built-in element
     * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
     */
    is?: JSXIntrElName
  }
}

export const AnyComponent: React.FC<any> = (props) => {
  const elementName: ElementResetName = props.is || 'div'
  const attr = Object.assign({}, props)
  delete attr.is
  // Copy className to new element. This allows for creating components that
  // inherit styling from the base component.
  attr.className = props.className
  return jsx(elementName, attr, props.children)
}

export const Any: React.FC<any> = (props: any) => {
  const elementName: ElementResetName = props.is || 'div'
  const elementReset: CSSObject = elementResetMap[elementName]
  return <AnyComponent {...props} css={[anyReset, elementReset, props.css]} />
}
