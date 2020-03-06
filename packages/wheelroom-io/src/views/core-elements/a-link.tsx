/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface ALinkProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
  /** Link URL attribute */
  href?: any
  /** Link aria-label attribute */
  ariaLabel?: string | undefined
  /** Link title attribute */
  title?: string | undefined
  /** Link target attribute */
  target?: '_blank' | '_self' | '_parent' | '_top' | undefined
  /** Link ID attribute */
  id?: string | undefined
  /** Link download attribute */
  download?: boolean | undefined
  /** Link relationship attribute */
  rel?:
    | 'alternate'
    | 'author'
    | 'bookmark'
    | 'external'
    | 'help'
    | 'license'
    | 'next'
    | 'nofollow'
    | 'noreferrer'
    | 'noopener'
    | 'prev'
    | 'search'
    | 'tag'
    | undefined
}

export const ALink = (props: ALinkProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  return (
    <a
      id={props.id}
      rel={props.rel}
      title={props.title}
      download={props.download}
      target={props.target}
      aria-label={props.ariaLabel}
      css={systemCss(
        {
          ncss: { ...props.ncss },
        },
        currentThemeId
      )}
      href={props.href}
    >
      {props.children}
    </a>
  )
}
