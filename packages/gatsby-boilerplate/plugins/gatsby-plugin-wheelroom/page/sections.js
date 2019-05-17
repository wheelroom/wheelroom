import ArticleSection from '../sections/article/article-section'
import ArticlesSection from '../sections/articles/articles-section'
import AuthorSection from '../sections/author/author-section'
import BicycleSection from '../sections/bicycle/bicycle-section'
import FeaturedPageSection from '../sections/featured-page/featured-page-section'
import FooterSection from '../sections/footer/footer-section'
import Landmarks from './landmarks'
import OpenerSection from '../sections/opener/opener-section'
import React from 'react'

// This object gives us a simple string to component conversion. The object also
// defines the landmarks. Because of the way landmarks are organized they have
// an influence on the section order. See landmarks.jsx for more info on this.
//
const sectionList = {
  ContentfulSectionArticle: { element: ArticleSection, landMark: 'main' },
  ContentfulSectionArticles: { element: ArticlesSection, landMark: 'aside' },
  ContentfulSectionAuthor: { element: AuthorSection, landMark: 'aside' },
  ContentfulSectionBicycle: { element: BicycleSection, landMark: 'main' },
  ContentfulSectionFeaturedPage: {
    element: FeaturedPageSection,
    landMark: 'main',
  },
  ContentfulSectionFooter: { element: FooterSection, landMark: 'footer' },
  ContentfulSectionOpener: { element: OpenerSection, landMark: 'header' },
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
const Sections = props => {
  let sections = []
  props.sections.forEach((section, index) => {
    const Section = sectionList[section.__typename].element
    const landMark = sectionList[section.__typename].landMark
    sections.push(
      <Section
        {...section}
        allArticles={props.allArticles}
        article={props.subPageArticle}
        globals={props.globals}
        key={index}
        landMark={landMark}
        locale={props.locale}
        namedPaths={props.namedPaths}
        pathName={props.pathName}
      />
    )
  })
  // Add proper landmarks (header, main and footer) around sections
  return <Landmarks>{sections}</Landmarks>
}

export default Sections
