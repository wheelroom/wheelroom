/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Divider
 *
 */

import React from 'react'
import { Flex } from '../../core/elements/grid'

export const PageSectionDividerVar = () => {
  return <Flex is="div" ncss={{ py: 6, w: 1, h: '0px' }} />
}
