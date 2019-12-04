/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const ALink = (props: any) => (
  <a
    children={props.children}
    css={emotionCss({ ncss: { textDecoration: 'none', ...props.ncss } })}
    href={props.href}
  />
)
