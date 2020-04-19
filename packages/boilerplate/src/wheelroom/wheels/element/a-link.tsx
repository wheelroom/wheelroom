/** @jsx jsx */
import { aLinkReset } from './resets/a-link-reset'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { ElementProps } from './element'
import { getSelf } from './self'

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

export const ALink = (props: ALinkProps) => {
  const extraAttrs = {
    download: props.download,
    href: props.href,
    rel: props.rel,
    role: props.role,
    target: props.target,
  }
  return getSelf(props, aLinkReset, 'a', extraAttrs)
}
