import { NcssProps } from '../lib/ncss'
import { Wheel } from '../lib/wheel'
import { ALinkElementProps } from './element/a-link'
import { AnyElementProps } from './element/any'
import { ButtonElementProps } from './element/button'
import { GLinkElementProps } from './element/g-link'
import { GridProps } from './element/grid'
import { HeadingProps } from './element/heading'
import { FeatherIconProps, TextIconProps } from './element/icon'
import { ParagraphElementProps } from './element/paragraph'

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
  | ALinkElementProps
  | AnyElementProps
  | ButtonElementProps
  | ElementProps
  | FeatherIconProps
  | GLinkElementProps
  | GridProps
  | HeadingProps
  | ParagraphElementProps
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
