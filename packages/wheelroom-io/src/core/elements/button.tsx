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
  value?: string | number | string[] | undefined
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined
  /** Button role attribute */
  role?: 'button' | undefined
  /** Button onClick function */
  onClick?: any
  /** Button aria-label attribute */
  ariaLabel?: string | undefined
  /** Button aria-expanded attribute */
  ariaExpanded?: boolean | undefined
  /** Button aria-controls attribute */
  ariaControls?: string | undefined
  /** Button aria-pressed attribute */
  ariaPressed?: boolean | 'false' | 'mixed' | 'true' | undefined
  /** Button title attribute */
  title?: string | undefined
  /** Button disabled attribute */
  disabled?: boolean | undefined
  /** Button tabIndex attribute */
  tabIndex?: number | undefined
}

export const Button = (props: ButtonProps) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId
  const { adminCoreState } = useContext(AdminCoreContext)
  return (
    <button
      type={props.type}
      role={props.role}
      title={props.title}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      aria-expanded={props.ariaExpanded}
      aria-controls={props.ariaControls}
      aria-pressed={props.ariaPressed}
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
