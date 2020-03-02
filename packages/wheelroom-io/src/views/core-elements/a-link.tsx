/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'

export const ALink = (props: any) => (
  <a
    css={systemCss({
      ncss: { ...props.ncss },
    })}
    href={props.href}
  >
    {props.children}
  </a>
)
