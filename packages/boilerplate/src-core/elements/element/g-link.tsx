/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { NcssProps } from '../../lib/ncss'
import { ElementProps, getElementAttrs } from '../element'
import { gLinkReset } from './g-link-reset'

export interface GLinkElementStyle {
  ncss: NcssProps
}

export interface GLinkProps extends ElementProps {
  /** URL attribute */
  to?: any
  /** On click handler */
  onClick?: () => any
}

export const GLink = (props: GLinkProps) => {
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
      props.wheel.elementStyles.gLink,
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