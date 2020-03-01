/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'

export const ALink = (props: any) => (
  <a
    css={systemCss({
      ncss: { display: 'inline-block', textDecoration: 'none', ...props.ncss },
    })}
    href={props.href}
  >
    {props.children}
  </a>
)
