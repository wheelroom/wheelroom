/**
 * Component
 *
 * Component type: docSection
 *
 */

import React from 'react'
import { DocProps } from '../doc/doc'
import { DocSectionDocVar } from './doc-section-doc-var'
import { getVariation } from '../../wheelroom/lib/get-variation'
import { SectionProps } from '../../wheelroom/sections/section-props'

const componentList = {
  ['doc']: DocSectionDocVar,
}

export interface DocSectionProps extends SectionProps {
  /** Gatsby fetched data */
  __typename: string
  docs?: DocProps
  eventId?: string
  variation?: string
}

export const DocSection = (props: DocSectionProps) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
