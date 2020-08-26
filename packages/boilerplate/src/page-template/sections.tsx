import React from 'react'

import { NamedPaths } from 'gatsby-theme-wheelroom'
import { BlogSection, BlogModel, AllBlogModel } from '@wheelroom/wheel-blog'
import { DocSection, DocModel, AllDocModel } from '@wheelroom/wheel-doc'
import { TextSection } from '@wheelroom/wheel-text'
import { NavigationSection } from '@wheelroom/wheel-navigation'
import { TableSection } from '@wheelroom/wheel-table'
import { TopicSection } from '@wheelroom/wheel-topic'
import {
  GlobalsModel,
  CoreSiteMetadata,
  PageModel,
  SectionWheels,
  ScrollSpy,
} from '@wheelroom/core'
import { CustomSection } from '../custom-wheel/models/custom-section/custom-section'
import { Landmarks } from './landmarks'
import { SectionProps } from './section-props'

export interface SectionMap {
  [contentfulSectionName: string]: any
}

const sectionMap: SectionMap = {
  ContentfulBlogSection: BlogSection,
  ContentfulCustomSection: CustomSection,
  ContentfulDocSection: DocSection,
  ContentfulNavigationSection: NavigationSection,
  ContentfulTableSection: TableSection,
  ContentfulTextSection: TextSection,
  ContentfulTopicSection: TopicSection,
}

export interface SectionsProps {
  locale: string
  namedPaths: NamedPaths
  activeThemeId: string | undefined
  globals: GlobalsModel
  blog: BlogModel
  allBlog: AllBlogModel
  doc: DocModel
  allDoc: AllDocModel
  page: PageModel
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

      allDoc: props.allDoc,
      doc: props.doc,

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
