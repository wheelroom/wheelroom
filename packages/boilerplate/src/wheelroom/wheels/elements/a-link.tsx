/** @jsx jsx */
import { jsx } from '@emotion/core'
import { aLinkPreset } from './a-link-preset'
import { NcssProps, Wheel } from '../types'
import { styledSystem } from '@wheelroom/styled-system'
import { LinkRelationshipAttribute } from './types/attribute-names'

export interface ALinkProps {
  /** Styling wheel */
  wheel: Wheel
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Link URL attribute */
  href?: any
  /** Link aria-label attribute */
  ariaLabel?: string | undefined
  /** Aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Link title attribute */
  title?: string | undefined
  /** Link role attribute */
  role?: string | undefined
  /** Link target attribute */
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined
  /** Link ID attribute */
  id?: string | undefined
  /** Link download attribute */
  download?: boolean | undefined
  /** Link relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
}

export const ALink = (props: ALinkProps) => {
  const label = 'a-link'
  return (
    <a
      id={props.id}
      title={props.title}
      role={props.role}
      target={props.target}
      aria-label={props.ariaLabel}
      aria-hidden={props.ariaHidden}
      download={props.download}
      rel={props.rel}
      css={styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
        ncss: {
          label,
          ...props.wheel.elementPresets.aLink.ncss,
          ...aLinkPreset.ncss,
          ...props.wheel.style.ncss,
          ...props.ncss,
        },
      })}
      href={props.href}
    >
      {props.children}
    </a>
  )
}
