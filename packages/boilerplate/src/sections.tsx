import { ArticleSection } from '@jacco-meijer/content-models'
import { Landmarks } from '@jacco-meijer/content-models'
import * as React from 'react'

// This object gives us a simple string to component conversion. The object also
// defines the landmarks. Because of the way landmarks are organized they have
// an influence on the section order. See landmarks.jsx for more info on this.
//
const sectionMap = {
  ContentfulArticleSection: { element: ArticleSection, landMark: 'main' },
} as {
  [contentfulSectionName: string]: any
}

export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename].element
    const landMark = sectionMap[section.__typename].landMark
    const sectionProps = {
      key: index,
      landMark,
      locale: props.locale,
      namedPaths: props.namedPaths,
      pathName: props.pathName,
      ...section,
    }
    sectionList.push(<Section {...sectionProps} />)
  })

  // Add proper landmarks (header, main and footer) around sections
  return <Landmarks>{sectionList}</Landmarks>
}
