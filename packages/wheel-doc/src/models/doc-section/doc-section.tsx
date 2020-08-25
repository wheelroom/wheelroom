/**
 * Component
 *
 * Component type: docSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { DocSectionDocVar } from './doc-section-doc-var'
import { DocSectionModel } from './model'

const componentList = {
  doc: DocSectionDocVar,
}

export const DocSection = (props: DocSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
