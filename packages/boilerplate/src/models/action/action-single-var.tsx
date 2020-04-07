/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React from 'react'
import { ActionProps } from './action'
import { ActionTree } from '../../core/trees/action/action-tree'

export const ActionSingleVar = (props: ActionProps) => <ActionTree {...props} />
