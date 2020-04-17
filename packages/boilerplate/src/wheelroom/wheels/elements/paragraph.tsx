/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import {
  paragraphPreset,
  smallPreset,
  subPreset,
  subResetPreset,
  supPreset,
} from './paragraph-preset'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel, NcssProps } from '../types'
import { LinkRelationshipAttribute } from './types/attribute-names'

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
  const label = 'paragraph'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...paragraphPreset.ncss,
      ...props.wheel.elementPresets.p.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'p', attrs, props.children)
}

export const Small = (props: ParagraphProps) => {
  const label = 'small'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...paragraphPreset.ncss,
      ...smallPreset.ncss,
      ...props.wheel.elementPresets.small.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'small', attrs, props.children)
}

export const Sub = (props: ParagraphProps) => {
  const label = 'sub'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...paragraphPreset.ncss,
      ...subResetPreset.ncss,
      ...subPreset.ncss,
      ...props.wheel.elementPresets.sub.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'sub', attrs, props.children)
}

export const Sup = (props: ParagraphProps) => {
  const label = 'sup'
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: {
      label,
      ...paragraphPreset.ncss,
      ...subResetPreset.ncss,
      ...supPreset.ncss,
      ...props.wheel.elementPresets.sup.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'sup', attrs, props.children)
}
