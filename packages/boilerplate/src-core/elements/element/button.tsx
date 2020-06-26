/** @jsx jsx */
import React from 'react'
import { ElementProps } from '../element'
import { getSelf } from '../self/self'
import { buttonReset } from './button-reset'

export interface ButtonElementProps extends ElementProps {
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

export const Button = React.forwardRef(
  (props: ButtonElementProps, ref: any) => {
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
    extraAttrs.value = props.value
    return getSelf(props, buttonReset, 'button', extraAttrs)
  }
)
