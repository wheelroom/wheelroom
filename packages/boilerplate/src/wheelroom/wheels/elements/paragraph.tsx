/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import { paragraphPreset } from './paragraph-preset'
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
      ...props.wheel.elementPresets.paragraph.ncss,
      ...paragraphPreset.ncss,
      ...props.wheel.style.ncss,
      ...props.ncss,
    },
  })
  return jsx(props.is || 'p', attrs, props.children)
}
