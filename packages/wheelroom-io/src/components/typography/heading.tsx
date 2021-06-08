import { AnyProps } from '@wheelroom/any/Any'
import {
  H1 as AnyH1,
  H2 as AnyH2,
  H3 as AnyH3,
  H4 as AnyH4,
  H5 as AnyH5,
  H6 as AnyH6,
} from '@wheelroom/any/elements'
import { mediaQuery } from '../../lib/media-query'

const headingStyle = {
  marginBottom: '16px',
  marginTop: 0,
}

export const H1 = (props: AnyProps['h1']) => (
  <AnyH1
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['42px', '42px', '56px', '56px'],
    })}
  >
    {props.children}
  </AnyH1>
)
export const H2 = (props: AnyProps['h2']) => (
  <AnyH2
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['32px', '32px', '42px', '42px'],
    })}
  >
    {props.children}
  </AnyH2>
)
export const H3 = (props: AnyProps['h3']) => (
  <AnyH3
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['20px', '20px', '24px', '24px'],
    })}
  >
    {props.children}
  </AnyH3>
)

export const H4 = (props: AnyProps['h4']) => (
  <AnyH4
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['18px', '18px', '20px', '20px'],
    })}
  >
    {props.children}
  </AnyH4>
)

export const H5 = (props: AnyProps['h5']) => (
  <AnyH5
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['18px', '18px', '20px', '20px'],
    })}
  >
    {props.children}
  </AnyH5>
)

export const H6 = (props: AnyProps['h6']) => (
  <AnyH6
    css={mediaQuery({
      ...headingStyle,
      fontSize: ['18px', '18px', '20px', '20px'],
    })}
  >
    {props.children}
  </AnyH6>
)
