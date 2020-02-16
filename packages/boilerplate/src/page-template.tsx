import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { GlobalsProps } from './components/globals'
import { PageProps } from './components/page'
import { pageDebug } from './lib/debug'
import { getOpenerOrPageImage } from './lib/get-opener-or-page-image'
import { Seo } from './lib/seo'
import { Sections } from './sections/sections'
import { getAllPaddingObject } from './styles/global-padding'
import { Box, Container } from './views/core-elements/grid'
import { PreviewUpdateButton } from './lib/preview-update-button'

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
  const [previewPage, setPreviewPage] = useState()
  pageDebug('PageTemplate', props)

  const globals: GlobalsProps = props.data.globals
  const keywords = globals.siteKeywords
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const page: PageProps = previewPage || props.data.page
  const siteVersion = props.data.site.siteMetadata.siteVersion
  const sections = page.sections

  const image = getOpenerOrPageImage(page)

  const sectionProps = {
    locale,
    namedPaths,

    globals,
    page,

    sections,
  }
  const seoProps = {
    description: page.seoDescription,
    imageSrc: image && image.fluid.src,
    keywords,
    locale,
    meta: [],
    siteAuthor: globals.siteAuthor,
    siteDescription: globals.siteDescription,
    siteHeading: globals.siteHeading,
    siteKeywords: globals.siteKeywords,
    siteVersion,
    title: page.seoTitle,
  }

  return (
    <Box
      ncss={{
        ...getAllPaddingObject('page'),
      }}
    >
      <Global styles={GlobalAStyles} />
      <Container>
        <Seo {...seoProps} />
        <Sections {...sectionProps} />
        <PreviewUpdateButton
          previewSecrets={props.data.site.siteMetadata.secrets}
          searchQuery={props.location.search}
          setPreviewPage={setPreviewPage}
        />
      </Container>
    </Box>
  )
}

export default PageTemplate

export const query = graphql`
  query($pageId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
        secrets {
          spaceId
          previewToken
          environemnt
        }
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
