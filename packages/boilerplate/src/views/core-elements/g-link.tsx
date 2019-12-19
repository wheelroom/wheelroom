/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css.js'

export const GLink = (props: any) => (
  <Link
    children={props.children}
    css={emotionCss({ ncss: { textDecoration: 'none', ...props.ncss } })}
    to={props.to}
  />
)
