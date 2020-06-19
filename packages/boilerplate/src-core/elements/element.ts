import { NcssProps, Wheel } from '../lib/get-wheel'
import { ALinkProps } from './element/a-link'
import { AnyProps } from './element/any'
import { ButtonProps } from './element/button'
import { GLinkProps } from './element/g-link'
import { GridProps } from './element/grid'
import { HeadingProps } from './element/heading'
import { FeatherIconProps, TextIconProps } from './element/icon'
import { ParagraphProps } from './element/paragraph'

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
  /** Table attribute */
  colspan?: number
  /** Time attribute */
  datetime?: string
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
  colSpan: props.colspan,
  dateTime: props.datetime,
  hidden: props.hidden,
  id: props.id,
  'tab-index': props.tabIndex,
  title: props.title,
  ...extraAttrs,
})
