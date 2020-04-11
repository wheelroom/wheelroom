/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Box } from '../../wheelroom/wheels/elements/grid'
import { addCssLabels } from '../../wheelroom/lib/add-css-labels'

export const PageSectionDividerVar = () => {
  addCssLabels('divider', {})
  return <Box is="div" ncss={{ py: 6, w: 1, h: '0px' }} />
}
