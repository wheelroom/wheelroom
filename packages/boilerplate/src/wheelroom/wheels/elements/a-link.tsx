/** @jsx jsx */
import { jsx } from '@emotion/core'
import { aLinkReset } from './a-link-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export interface ALinkProps extends ElementProps {
  /** Link download attribute */
  download?: boolean | undefined
  /** Link URL attribute */
  href?: any
  /** Link relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** Link role attribute */
  role?: string | undefined
  /** Link target attribute */
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined
}

const getAttrs = (props: ALinkProps) => {
  const attrs = {
    ...getElementAttrs(props),
    download: props.download,
    href: props.href,
    rel: props.rel,
    role: props.role,
    target: props.target,
  }
  return attrs
}

export const ALink = (props: ALinkProps) => {
  const label = { ncss: { label: 'a-link' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      aLinkReset,
      props.wheel.elementPresets.a,
      props.wheel.style,
      props,
    ])
  )

  return jsx('a', attrs, props.children)
}
