/**
 * Component variation
 *
 * Component type: openerSection
 * Variation: Navigation only
 *
 */

import React, { Fragment } from 'react'
import { Navigation } from '../navigation'
import { OpenerSectionProps } from './opener-section'

export const OpenerSectionNavigationOnlyVar = (props: OpenerSectionProps) => {
  return (
    <Fragment>
      <Navigation pages={props.navigation.pages} />
    </Fragment>
  )
}
