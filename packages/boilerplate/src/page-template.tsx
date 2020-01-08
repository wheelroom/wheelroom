import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React from 'react'
import { Fragment } from 'react'
import { pageDebug } from './lib/debug'
import { getPageImage } from './lib/get-page-meta-tags'
import { Seo } from './lib/seo'
import { Sections } from './sections/sections'
import { SeoProps } from './types/seo'
import { Box, Container, Flex } from './views/core-elements/grid'

const GlobalAStyles = {
  body: {
    margin: 0,
  },
}

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.
//
const PageTemplate = (props: any) => {
  console.log('props', props)
  pageDebug('PageTemplate', props)

  const globals = props.data.globals
  const keywords = globals.siteKeywords
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const page = props.data.page
  const pathName = page.pathName
  const siteVersion = props.data.site.siteMetadata.siteVersion
  const sections = page.sections

  // Page user data
  const pageHeading = page.pageHeading
  const pageImage = page.pageImage
  const pageInfoText = page.pageInfoText

  const image = getPageImage(page, 'ContentfulOpenerSection')

  const sectionProps = {
    globals,
    locale,
    namedPaths,
    pageHeading,
    pageImage,
    pageInfoText,
    pathName,
    sections,
  }
  const seoProps = {
    description: page.seoDescription,
    image,
    keywords,
    locale,
    meta: [],
    siteAuthor: globals.siteAuthor,
    siteDescription: globals.siteDescription,
    siteKeywords: globals.siteKeywords,
    siteTitle: globals.siteTitle,
    siteVersion,
    title: page.seoTitle,
  } as SeoProps

  return (
    <Fragment>
      <Global styles={GlobalAStyles} />
      <Container>
        <Flex
          ncss={{
            color: 'white',
            fontFamily: 'heading',
            fontSize: [2, 4, 6, 8],
          }}
        >
          <Box ncss={{ p: 5, w: [1, 1 / 2], bg: 'orange' }}>Box</Box>
          <Box ncss={{ p: 5, w: [1, 1 / 2], bg: 'blue' }}>Box</Box>
        </Flex>
        <Seo {...seoProps} />
        <Sections {...sectionProps} />
      </Container>
    </Fragment>
  )
}

export default PageTemplate

export const query = graphql`
  query($pageId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      ...Page
    }
    globals: contentfulGlobals(id: { eq: $globalsId }) {
      ...Globals
    }
  }
`
