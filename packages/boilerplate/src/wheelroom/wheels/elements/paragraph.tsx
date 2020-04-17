/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import {
  paragraphReset,
  smallReset,
  subReset,
  subSupReset,
  supReset,
} from './paragraph-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { mergeNcss } from '../../lib/merge-ncss'

export interface ParagraphProps {
  /** Styling wheel */
  wheel: Wheel
  /** Render as another HTML element */
  is?: BlockLevelElementName | undefined
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** Grid id attribute */
  id?: string | undefined
  /** Grid role attribute */
  role?: 'modal' | string | undefined
  /** Title attribute */
  title?: string | undefined
  /** Aria-label attribute */
  ariaLabel?: string | undefined
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Sria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Hidden attribute */
  hidden?: boolean | undefined
  /** TtabIndex attribute */
  tabIndex?: number | undefined
  /** Relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** On click handler */
  onClick?: () => any
}

const getAttrs = (props: ParagraphProps) => {
  const attrs = {
    id: props.id,
    hidden: props.hidden,
    role: props.role,
    title: props.title,
    'aria-modal': props.ariaModal,
    'aria-label': props.ariaLabel,
    'aria-hidden': props.ariaHidden,
    'tab-index': props.tabIndex,
    rel: props.rel,
    onClick: props.onClick,
  }
  return attrs
}

export const Paragraph = (props: ParagraphProps) => {
  const label = { ncss: { label: 'paragraph' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      paragraphReset,
      props.wheel.elementPresets.p,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'p', attrs, props.children)
}

export const Small = (props: ParagraphProps) => {
  const label = { ncss: { label: 'small' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      paragraphReset,
      smallReset,
      props.wheel.elementPresets.small,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'small', attrs, props.children)
}

export const Sub = (props: ParagraphProps) => {
  const label = { ncss: { label: 'sub' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      paragraphReset,
      subSupReset,
      subReset,
      props.wheel.elementPresets.sub,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'sub', attrs, props.children)
}

export const Sup = (props: ParagraphProps) => {
  const label = { ncss: { label: 'sup' } }
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    mergeNcss([
      label,
      paragraphReset,
      subSupReset,
      supReset,
      props.wheel.elementPresets.sup,
      props.wheel.style,
      props,
    ])
  )
  return jsx(props.is || 'sup', attrs, props.children)
}
