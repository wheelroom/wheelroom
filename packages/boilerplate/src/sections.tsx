import { ArticleSection } from '@jacco-meijer/content-models'
import { Landmarks } from '@jacco-meijer/wheelroom'
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

/**
 * All sections get a few default props gathered by gatsby-node.js:
 *
 * - allArticles: an array of the 10 most recent models/content/article's
 * - article: the models/content/article specified by the path /article/%slug%
 * - globals: global data defined by models/part/globals
 * - locale: the current (two characters) locale
 * - namedPaths: an object with path names and there actual (localized) paths
 * - pathName: the name of the current path
 *
 */
export const Sections = (props: any) => {
  const sectionList = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionMap[section.__typename].element
    const landMark = sectionMap[section.__typename].landMark
    const sectionProps = {
      allArticles: props.allArticles,
      article: props.subPageArticle,
      globals: props.globals,
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
