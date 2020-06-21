import React from 'react'

import { NamedPaths } from 'gatsby-theme-wheelroom'
import { BlogSection, BlogProps, AllBlogProps } from '../../src-blog-wheel'
import { TextSection } from '../../src-text-wheel'
import { NavigationSection } from '../../src-navigation-wheel'
import { TableSection } from '../../src-table-wheel'
import { TopicSection } from '../../src-topic-wheel'
import {
  GlobalsProps,
  CoreSiteMetadata,
  PageProps,
  SectionWheels,
  ScrollSpy,
} from '../../src-core'
import { Landmarks } from './landmarks'
import { SectionProps } from './section-props'

export interface SectionMap {
  [contentfulSectionName: string]: any
}

const sectionMap: SectionMap = {
  ContentfulBlogSection: BlogSection,
  ContentfulNavigationSection: NavigationSection,
  ContentfulTopicSection: TopicSection,
  ContentfulTableSection: TableSection,
  ContentfulTextSection: TextSection,

  // TODO: Remove this
  ContentfulPageSection: TopicSection,
}

export interface SectionsProps {
  locale: string
  namedPaths: NamedPaths
  activeThemeId: string | undefined
  globals: GlobalsProps
  blog: BlogProps
  allBlog: AllBlogProps
  page: PageProps
  siteMetadata: CoreSiteMetadata
  sections: any
  sectionWheels: SectionWheels
}

export const Sections = (props: SectionsProps) => {
  const sectionList: JSX.Element[] = []
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename]
    const sectionProps: SectionProps = {
      __typename: section.__typename,
      activeThemeId: props.activeThemeId,
      index,
      key: index,
      locale: props.locale,
      namedPaths: props.namedPaths,
      sectionWheels: props.sectionWheels,

      allBlog: props.allBlog,
      blog: props.blog,
      globals: props.globals,
      page: props.page,
      siteMetadata: props.siteMetadata,

      ...section,
    }

    sectionList.push(
      <ScrollSpy siteEmbeds={props.globals.siteEmbeds || []} {...sectionProps}>
        <Section {...sectionProps} />
      </ScrollSpy>
    )
  })

  return <Landmarks>{sectionList}</Landmarks>
}
