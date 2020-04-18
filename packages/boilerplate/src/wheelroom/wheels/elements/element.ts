import { NcssProps, Wheel } from '../types'
import { ALinkProps } from './a-link'
import { AnyProps } from './any'
import { ButtonProps } from './button'
import { GLinkProps } from './g-link'
import { GridProps } from './grid'
import { HeadingProps } from './heading'
import { FeatherIconProps, TextIconProps } from './icon'
import { ParagraphProps } from './paragraph'

export interface ElementProps {
  /** Aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Aria-label attribute */
  ariaLabel?: string | undefined
  /** React children */
  children?: any
  /** Hidden attribute */
  hidden?: boolean | undefined
  /** Link ID attribute */
  id?: string | undefined
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** TabIndex attribute */
  tabIndex?: number | undefined
  /** Link title attribute */
  title?: string | undefined
  /** Styling wheel */
  wheel: Wheel
}

type GetElementAttrsProps =
  | ALinkProps
  | AnyProps
  | ButtonProps
  | ElementProps
  | FeatherIconProps
  | GLinkProps
  | GridProps
  | HeadingProps
  | ParagraphProps
  | TextIconProps

export const getElementAttrs = (
  props: GetElementAttrsProps,
  extraAttrs: any = {}
) => ({
  'aria-hidden': props.ariaHidden,
  'aria-label': props.ariaLabel,
  hidden: props.hidden,
  id: props.id,
  'tab-index': props.tabIndex,
  title: props.title,
  ...extraAttrs,
})
