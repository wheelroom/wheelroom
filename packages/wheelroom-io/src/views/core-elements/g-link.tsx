/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { getPreviewQueryString } from '@jacco-meijer/admin-page-preview'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface GLinkProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
  /** Gatsby Link */
  to?: any
}

export const GLink = (props: GLinkProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const { adminCoreState } = useContext(AdminCoreContext)
  if (!props.to) {
    return null
  }
  return (
    <Link
      css={systemCss(
        {
          ncss: {
            ...props.ncss,
          },
        },
        currentThemeId
      )}
      to={props.to + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </Link>
  )
}
