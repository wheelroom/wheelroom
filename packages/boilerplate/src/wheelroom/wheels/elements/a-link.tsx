/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { LinkRelationshipAttribute, NcssProps } from './types'
import { aLinkPreset } from './a-link-preset'
import { aLinkStyle } from './a-link-theme'

export interface ALinkProps {
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
  const currentThemeId = useGetCurrentThemeId() as ThemeId
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
      css={systemCss(
        {
          ncss: {
            ...aLinkPreset,
            ...aLinkStyle,
            ...props.ncss,
          },
        },
        currentThemeId
      )}
      href={props.href}
    >
      {props.children}
    </a>
  )
}
