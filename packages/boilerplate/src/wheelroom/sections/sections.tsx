import React from 'react'
import { BlogSection } from '../../models/blog-section/blog-section'
import { Landmarks } from './landmarks'
import { NavigationSection } from '../../models/navigation-section/navigation-section'
import { PageSection } from '../../models/page-section/page-section'
import { SectionProps } from './section-props'
import { TableSection } from '../../models/table-section/table-section'
import { TextSection } from '../../models/text-section/text-section'

export interface SectionMap {
  [contentfulSectionName: string]: any
}

const sectionMap: SectionMap = {
  ContentfulBlogSection: BlogSection,
  ContentfulNavigationSection: NavigationSection,
  ContentfulPageSection: PageSection,
  ContentfulTableSection: TableSection,
  ContentfulTextSection: TextSection,
}

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename]
    const sectionProps = {
      __typename: section.__typename,
      index,
      key: index,
      locale: props.locale,
      namedPaths: props.namedPaths,
      activeThemeId: props.activeThemeId,

      globals: props.globals,
      blog: props.blog,
      allBlog: props.allBlog,
      page: props.page,
      siteMetadata: props.siteMetadata,

      ...section,
    } as SectionProps

    sectionList.push(<Section {...sectionProps} />)
  })

  return <Landmarks>{sectionList}</Landmarks>
}
