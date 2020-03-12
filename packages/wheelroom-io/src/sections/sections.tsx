import { landMarkType } from 'gatsby-theme-wheelroom'
import React from 'react'
import { Landmarks, Landmark } from '../lib/landmarks'
import { SectionProps } from '../sections/section-props'
import { PageSection } from '../components/page-section/page-section'

export interface SectionMap {
  [contentfulSectionName: string]: {
    element: any
    landMark: landMarkType
  }
}

// This object gives us a simple string to component conversion. The object also
// defines the landmarks. Because of the way landmarks are organized they have
// an influence on the section order. See landmarks.jsx for more info on this.
//
const sectionMap = {
  ContentfulPageSection: {
    element: PageSection,
    landMark: 'main',
  },
} as SectionMap

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename].element
    const landMark = sectionMap[section.__typename].landMark
    const sectionProps = {
      index,
      locale: props.locale,
      namedPaths: props.namedPaths,

      globals: props.globals,
      page: props.page,

      ...section,
    } as SectionProps

    sectionList.push(
      <Landmark landMark={landMark} key={index}>
        <Section {...sectionProps} />
      </Landmark>
    )
  })

  // Add proper landmarks (header, main and footer) around sections
  return <Landmarks>{sectionList}</Landmarks>
}

/**
 *
 * if (index=0 && (variation='hero' || hasNavigation)) => <header role="banner">
 *
 * if (index=last && hasNavigation) => <footer role="contentinfo">
 *
 * all others are <main role="main">
 *
 * add variation prop to Landmark and use this for css label
 *
 */
