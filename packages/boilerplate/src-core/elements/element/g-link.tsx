/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from '../element'
import { gLinkReset } from './g-link-reset'

export interface GLinkElementProps extends ElementProps {
  /** URL attribute */
  to?: any
  /** On click handler */
  onClick?: () => any
}

export const GLink = (props: GLinkElementProps) => {
  const label = { ncss: { label: 'g-link' } }
  const attrs: any = getElementAttrs(props)
  attrs.onClick = props.onClick
  attrs.to = props.to
  attrs.css = styledSystem(
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
    mergeNcss([
      label,
      gLinkReset,
      props.wheel.elementNcss.gLink,
      props.wheel.style,
      props,
    ])
  )
  return (
    <Link activeClassName="active" {...attrs}>
      {props.children}
    </Link>
  )
}
