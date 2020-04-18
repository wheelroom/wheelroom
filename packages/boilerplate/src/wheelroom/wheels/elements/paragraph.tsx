/** @jsx jsx */
import { jsx } from '@emotion/core'
import { BlockLevelElementName } from './types/element-names'
import {
  paragraphReset,
  smallReset,
  subReset,
  supReset,
  ParagraphReset,
} from './paragraph-reset'
import { styledSystem } from '@wheelroom/styled-system'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { mergeNcss } from '../../lib/merge-ncss'
import { ElementProps, getElementAttrs } from './element'

export interface ParagraphProps extends ElementProps {
  /** Render as another HTML element */
  is?: BlockLevelElementName | undefined
  /** Grid role attribute */
  role?: 'modal' | string | undefined
  /** Aria-modal attribute */
  ariaModal?: boolean
  /** Relationship attribute */
  rel?: LinkRelationshipAttribute | undefined
  /** On click handler */
  onClick?: () => any
}

const getAttrs = (props: ParagraphProps) => {
  const attrs = {
    ...getElementAttrs(props),
    'aria-modal': props.ariaModal,
    rel: props.rel,
    role: props.role,
    onClick: props.onClick,
  }
  return attrs
}

const getParagraph = (
  props: ParagraphProps,
  reset: ParagraphReset,
  elementName: string
) => {
  const label = { ncss: { label: elementName } }
  const ncss = mergeNcss([
    label,
    reset,
    props.wheel.elementPresets[elementName],
    props.wheel.style,
    props,
  ])
  const attrs: any = getAttrs(props)
  attrs.css = styledSystem(
    props.wheel.styledSystemConfig,
    props.wheel.theme,
    ncss
  )
  return jsx(elementName, attrs, props.children)
}

export const Paragraph = (props: ParagraphProps) => {
  return getParagraph(props, paragraphReset, 'p')
}

export const Small = (props: ParagraphProps) => {
  return getParagraph(props, smallReset, 'small')
}

export const Sub = (props: ParagraphProps) => {
  return getParagraph(props, subReset, 'sub')
}

export const Sup = (props: ParagraphProps) => {
  return getParagraph(props, supReset, 'sup')
}
