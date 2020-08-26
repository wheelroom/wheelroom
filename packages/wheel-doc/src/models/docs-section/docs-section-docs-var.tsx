/**
 * Component variation
 *
 * Component type: docsSection
 * Variation: Docs
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { Docs } from '../docs/docs'
import { DocsSectionModel } from './model'
import { DocSectionWrapper } from './docs-section-wrapper'

export const DocsSectionDocsVar = (props: DocsSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'docsSection',
    sectionWheels: props.sectionWheels,
    variation: 'docs',
  })
  if (!sectionWheel || !props.docs) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <DocSectionWrapper containerStyle="container" wheel={wheel}>
      <Docs
        data={data}
        docs={props.docs}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.docs }}
      />
    </DocSectionWrapper>
  )
}
