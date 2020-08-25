/**
 * Component variation
 *
 * Component type: docSection
 * Variation: Doc
 *
 */

import React from 'react'
import { getSectionWheel } from '@wheelroom/core'
import { Doc } from '../doc/doc'
import { DocSectionModel } from './model'
import { DocSectionWrapper } from './doc-section-wrapper'

export const DocSectionDocVar = (props: DocSectionModel) => {
  const sectionWheel = getSectionWheel({
    themeId: props.activeThemeId,
    wheelId: 'docSection',
    sectionWheels: props.sectionWheels,
    variation: 'doc',
  })
  if (!sectionWheel || !props.doc) {
    return null
  }
  const { data, wheel } = sectionWheel
  return (
    <DocSectionWrapper containerStyle="container" wheel={wheel}>
      <Doc
        data={data}
        doc={props.doc}
        locale={props.locale}
        wheel={{ ...wheel, style: wheel.style.doc }}
      />
    </DocSectionWrapper>
  )
}
