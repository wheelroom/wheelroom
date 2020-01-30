/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css'

export const GLink = (props: any) => (
  <Link
    css={emotionCss({
      ncss: { display: 'block', textDecoration: 'none', ...props.ncss },
    })}
    to={props.to}
  >
    {props.children}
  </Link>
)
