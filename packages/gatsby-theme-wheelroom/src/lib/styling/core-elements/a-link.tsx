/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const ALink = (props: any) => (
  <a
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
    href={props.href}
  />
)
