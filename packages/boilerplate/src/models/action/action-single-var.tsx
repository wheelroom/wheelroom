/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React from 'react'
import { ActionProps } from './action'
import { CoreAction } from '../../core/model-views/action/core-action'

export const ActionSingleVar = (props: ActionProps) => <CoreAction {...props} />
