/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps } from './types'
import { defaultGLinkStyle } from '../../element-styles/g-link'

export interface GLinkProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Gatsby Link URL attribute */
  to?: any
  /** Gatsby Link ID attribute */
  id?: string | undefined
  /** Gatsby Link aria-label attribute */
  ariaLabel?: string | undefined
  /** Gatsby Link title attribute */
  title?: string | undefined
}

export const GLink = (props: GLinkProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const { adminCoreState } = useContext(AdminCoreContext)
  if (!props.to) {
    return null
  }
  return (
    <Link
      id={props.id}
      title={props.title}
      aria-label={props.ariaLabel}
      css={systemCss(
        {
          ncss: { ...defaultGLinkStyle, ...props.ncss },
        },
        currentThemeId
      )}
      to={props.to + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </Link>
  )
}
