import { Ncss } from '../lib/ncss'
import { Wheel } from '../lib/wheel'
import { ALinkElementProps } from './a-link'
import { AnyElementProps } from './any'
import { ButtonElementProps } from './button'
import { GLinkElementProps } from './g-link'
import { GridElementProps } from './grid'
import { HeadingElementProps } from './heading'
import { FeatherIconElementProps, TextIconElementProps } from './icon'
import { ParagraphElementProps } from './paragraph'

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
  ncss?: Ncss
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
  /** For attribute */
  for?: string
}

type GetElementAttrsProps =
  | ALinkElementProps
  | AnyElementProps
  | ButtonElementProps
  | ElementProps
  | FeatherIconElementProps
  | GLinkElementProps
  | GridElementProps
  | HeadingElementProps
  | ParagraphElementProps
  | TextIconElementProps

export const getElementAttrs = (
  props: GetElementAttrsProps,
  extraAttrs: any = {}
) => ({
  'aria-hidden': props.ariaHidden,
  'aria-label': props.ariaLabel,
  'tab-index': props.tabIndex,
  colSpan: props.colspan,
  dateTime: props.datetime,
  htmlFor: props.for,
  hidden: props.hidden,
  id: props.id,
  title: props.title,
  ...extraAttrs,
})
