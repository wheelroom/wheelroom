/**
 * Component
 *
 * Component type: docsSection
 *
 */

import React from 'react'
import { getVariation } from '@wheelroom/core'
import { DocsSectionDocsVar } from './docs-section-docs-var'
import { DocsSectionModel } from './model'

const componentList = {
  docs: DocsSectionDocsVar,
}

export const DocsSection = (props: DocsSectionModel) => {
  const Variation = getVariation(props, componentList)

  return <Variation {...props} />
}
