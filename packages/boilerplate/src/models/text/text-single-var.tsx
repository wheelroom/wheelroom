/**
 * Component variation
 *
 * Component type: text
 * Variation: Single
 *
 */

import React from 'react'
import { TextProps } from './text'
import { CoreText } from '../../core/model-views/text/core-text'

export const TextSingleVar = (props: TextProps) => <CoreText {...props} />
