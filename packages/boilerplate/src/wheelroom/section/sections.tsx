import React from 'react'
import { Landmarks } from './landmarks'
import { SectionProps } from './section-props'
import { PageSection } from '../../models/page-section'

export interface SectionMap {
  [contentfulSectionName: string]: any
}

const sectionMap: SectionMap = {
  ContentfulPageSection: PageSection,
}

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename]
    const sectionProps = {
      index,
      key: index,
      locale: props.locale,
      namedPaths: props.namedPaths,
      activeThemeId: props.activeThemeId,

      globals: props.globals,
      page: props.page,
      siteMetadata: props.siteMetadata,

      ...section,
    } as SectionProps

    sectionList.push(<Section {...sectionProps} />)
  })

  return <Landmarks>{sectionList}</Landmarks>
}
