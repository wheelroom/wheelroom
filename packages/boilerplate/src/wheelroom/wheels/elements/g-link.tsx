/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
import { NcssProps } from './types'
import { gLinkPreset } from './g-link-preset'
import { gLinkStyle } from './g-link-theme'

export interface GLinkProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** URL attribute */
  to?: any
  /** ID attribute */
  id?: string | undefined
  /** Link aria-label attribute */
  ariaLabel?: string | undefined
  /** Aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Title attribute */
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
      activeClassName="active"
      id={props.id}
      title={props.title}
      aria-label={props.ariaLabel}
      aria-hidden={props.ariaHidden}
      css={systemCss(
        {
          ncss: {
            ...gLinkPreset,
            ...gLinkStyle,
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
