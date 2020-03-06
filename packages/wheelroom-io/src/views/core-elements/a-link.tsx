/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface ALinkProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
  /** Gatsby Link */
  href?: any
}

export const ALink = (props: ALinkProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  return (
    <a
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
