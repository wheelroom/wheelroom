import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { GlobalsProps } from './components/globals'
import { PageProps } from './components/page'
import { pageDebug } from './lib/debug'
import { getOpenerOrPageImage } from './lib/get-opener-or-page-image'
import { Seo } from './lib/seo'
import { Sections } from './sections/sections'
import { getAllPaddingObject } from './styles/global-padding'
import { Box, Container } from './views/core-elements/grid'
import { PreviewUpdateButton } from './admin-module-resources/preview-update-button'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { getPreviewPage } from '@jacco-meijer/gatsby-theme-admin-modules'

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
  pageDebug('PageTemplate', props)
  const [adminModuleState] = useAdminModuleReducer()
  const previewPage = getPreviewPage(adminModuleState)
  console.log('render: page with modules:', adminModuleState.modules)

  let page: PageProps = props.data.page

  useEffect(() => {
    console.log('use effect: page template')
    page = previewPage || props.data.page
  }, [previewPage])

  const globals: GlobalsProps = props.data.globals
  const keywords = globals.siteKeywords
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const siteVersion = props.data.site.siteMetadata.siteVersion
  const sections = page.sections

  // Since we allow draft preview content, sections can be undefined
  if (!page.sections) {
    return 'No sections'
  }

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
        <PreviewUpdateButton />
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
          environment
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
