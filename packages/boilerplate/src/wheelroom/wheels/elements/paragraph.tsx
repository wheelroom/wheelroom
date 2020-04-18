/** @jsx jsx */
import { BlockLevelElementName } from './types/element-names'
import { paragraphReset } from './resets/paragraph-reset'
import { LinkRelationshipAttribute } from './types/attribute-names'
import { ElementProps } from './element'
import { getSelf } from './self'

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

const getExtraAttrs = (props: ParagraphProps) => {
  return {
    'aria-modal': props.ariaModal,
    rel: props.rel,
    role: props.role,
    onClick: props.onClick,
  }
}

export const Paragraph = (props: ParagraphProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, paragraphReset, 'p', extraAttrs)
}

export const Small = (props: ParagraphProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, paragraphReset, 'small', extraAttrs)
}

export const Sub = (props: ParagraphProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, paragraphReset, 'sub', extraAttrs)
}

export const Sup = (props: ParagraphProps) => {
  const extraAttrs = getExtraAttrs(props)
  return getSelf(props, paragraphReset, 'sup', extraAttrs)
}
