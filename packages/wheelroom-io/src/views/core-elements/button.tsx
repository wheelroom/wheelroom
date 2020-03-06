/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { getPreviewQueryString } from '@jacco-meijer/admin-page-preview'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export interface ButtonProps {
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: any
  /** Button value attribute */
  value?: any
  /** Button onClick function */
  onClick?: any
}

export const Button = (props: ButtonProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const { adminCoreState } = useContext(AdminCoreContext)
  if (!props.value) {
    return null
  }
  return (
    <button
      css={systemCss(
        {
          ncss: { ...props.ncss },
        },
        currentThemeId
      )}
      onClick={props.onClick}
      value={props.value + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </button>
  )
}
