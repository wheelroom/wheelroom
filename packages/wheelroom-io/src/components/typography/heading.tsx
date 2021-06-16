import { Any, AnyProps } from '@wheelroom/any/react'
import { mediaQuery } from '../../lib/media-query'

const headingStyle = {
  marginBottom: 16,
  marginTop: 0,
}

const styleMap = {
  h1: {
    ...headingStyle,
    fontSize: ['42px', '42px', '56px', '56px'],
  },
  h2: {
    ...headingStyle,
    fontSize: ['32px', '32px', '42px', '42px'],
  },
  h3: {
    ...headingStyle,
    fontSize: ['20px', '20px', '24px', '24px'],
  },
  h4: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
  h5: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
  h6: {
    ...headingStyle,
    fontSize: ['18px', '18px', '20px', '20px'],
  },
}
type HeadingName = keyof typeof styleMap
export const Heading = (props: AnyProps['h1']) => (
  <Any is={props.is} css={mediaQuery(styleMap[props.is as HeadingName])}>
    {props.children}
  </Any>
)
