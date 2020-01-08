import { landMarkType } from 'gatsby-theme-wheelroom'
import * as React from 'react'
import { FooterSection } from '../components/footer-section'
import { ListSection } from '../components/list-section'
import { OpenerSection } from '../components/opener-section'
import { QuoteSection } from '../components/quote-section'
import { TextSection } from '../components/text-section'
import { Landmarks } from '../lib/landmarks'
import { SectionProps } from '../sections/section-props'

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
  ContentfulFooterSection: {
    element: FooterSection,
    landMark: 'footer',
  },
  ContentfulListSection: {
    element: ListSection,
    landMark: 'main',
  },
  ContentfulOpenerSection: {
    element: OpenerSection,
    landMark: 'header',
  },
  ContentfulQuoteSection: {
    element: QuoteSection,
    landMark: 'aside',
  },
  ContentfulTextSection: {
    element: TextSection,
    landMark: 'main',
  },
} as SectionMap

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename].element
    const landMark = sectionMap[section.__typename].landMark
    const sectionProps = {
      allArticles: props.allArticles,
      article: props.article,
      globals: props.globals,
      key: index,
      landMark,
      locale: props.locale,
      namedPaths: props.namedPaths,

      pageHeading: props.pageHeading,
      pageImage: props.pageImage,
      pageInfoText: props.pageInfoText,

      pathName: props.pathName,
      ...section,
    } as SectionProps
    sectionList.push(<Section {...sectionProps} />)
  })

  // Add proper landmarks (header, main and footer) around sections
  return <Landmarks>{sectionList}</Landmarks>
}
