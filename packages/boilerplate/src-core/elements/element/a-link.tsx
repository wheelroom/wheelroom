/** @jsx jsx */
import { NcssProps } from '../../lib/get-wheel'
import { LinkRelationshipAttribute } from '../types/attribute-names'
import { ElementProps } from '../element'
import { getSelf } from '../self/self'
import { aLinkReset } from './a-link-reset'

export interface ALinkElementStyle {
  ncss: NcssProps
}

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
  /** On click handler */
  onClick?: () => any
}

export const ALink = (props: ALinkProps) => {
  const extraAttrs = {
    download: props.download,
    href: props.href,
    onClick: props.onClick,
    rel: props.rel,
    role: props.role,
    target: props.target,
  }
  return getSelf(props, aLinkReset, 'a', extraAttrs)
}
