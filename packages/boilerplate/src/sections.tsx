import { ArticleSection, Landmarks } from 'gatsby-theme-wheelroom'
import * as React from 'react'

// This object gives us a simple string to component conversion. The object also
// defines the landmarks. Because of the way landmarks are organized they have
// an influence on the section order. See landmarks.jsx for more info on this.
//
const sectionList = {
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
const Sections = (props: any) => {
  const sections = [] as JSX.Element[]
  props.sections.forEach((section: any, index: number) => {
    const Section = sectionList[section.__typename].element
    const landMark = sectionList[section.__typename].landMark
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
    sections.push(<Section {...sectionProps} />)
  })
  // Add proper landmarks (header, main and footer) around sections
  return <Landmarks>{sections}</Landmarks>
}

export default Sections
