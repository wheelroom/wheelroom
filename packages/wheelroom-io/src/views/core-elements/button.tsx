/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss } from '../../styled-system/system-css'

export const Button = (props: any) => (
  <button
    css={systemCss({
      ncss: { ...props.ncss },
    })}
    value={props.value}
  >
    {props.children}
  </button>
)
