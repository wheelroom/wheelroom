/** @jsx jsx */
import React from 'react'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { buttonReset } from './resets/button-reset'
import { ElementProps } from './element'
import { getSelf } from './self'

export interface ButtonProps extends ElementProps {
  /** Button aria-controls attribute */
  ariaControls?: string | undefined
  /** Button aria-expanded attribute */
  ariaExpanded?: boolean | undefined
  /** Button aria-pressed attribute */
  ariaPressed?: boolean | 'false' | 'mixed' | 'true' | undefined
  /** Button disabled attribute */
  disabled?: boolean | undefined
  /** Button ref attribute */
  ref?: any
  /** Button role attribute */
  role?: 'button' | undefined
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset' | undefined
  /** Button value attribute */
  value?: string | number | string[] | undefined
  /** On click handler */
  onClick?: () => any
}

export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const extraAttrs: any = {
    'aria-controls': props.ariaControls,
    'aria-expanded': props.ariaExpanded,
    'aria-label': props.ariaLabel,
    'aria-pressed': props.ariaPressed,
    disabled: props.disabled,
    onClick: props.onClick,
    role: props.role,
    type: props.type,
  }
  extraAttrs.ref = ref
  extraAttrs.value = props.value + getPreviewQueryString(adminCoreState)
  return getSelf(props, buttonReset, 'button', extraAttrs)
})
