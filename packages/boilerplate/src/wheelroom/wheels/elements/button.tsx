/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { buttonReset } from './button-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

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

const getAttrs = (props: ButtonProps) => {
  const attrs = {
    ...getElementAttrs(props),
    'aria-controls': props.ariaControls,
    'aria-expanded': props.ariaExpanded,
    'aria-label': props.ariaLabel,
    'aria-pressed': props.ariaPressed,
    disabled: props.disabled,
    onClick: props.onClick,
    role: props.role,
    type: props.type,
  }
  return attrs
}

export const Button = React.forwardRef((props: ButtonProps, ref: any) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const label = { ncss: { label: 'button' } }
  const attrs: any = getAttrs(props)
  attrs.ref = ref
  attrs.value = props.value + getPreviewQueryString(adminCoreState)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      buttonReset,
      props.wheel.elementPresets.button,
      props.wheel.style,
      props,
    ])
  )
  return jsx('button', attrs, props.children)
})
