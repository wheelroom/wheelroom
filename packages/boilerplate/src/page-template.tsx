import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React, { Fragment, useContext, useState } from 'react'
import { GlobalsProps } from './models/globals'
import { PageProps } from './models/page'
import { pageDebug } from './wheelroom/lib/debug'
import { Seo, SeoProps } from './wheelroom/lib/seo'
import { Sections } from './wheelroom/sections/sections'
import {
  PreviewUpdateButton,
  useFetchPreviewPage,
} from '@wheelroom/admin-page-preview'
import { classicGlobalReset } from './wheelroom/global/classic-global-reset'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { htmlReset } from './wheelroom/global/html-reset'
import { getTheme } from './themes/themes'
import { ThemeId } from './admin-resources/theme-info'

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.

const PageTemplate = (props: any) => {
  // Page preview admin module
  const [previewPage, setPreviewPage] = useState()
  useFetchPreviewPage(setPreviewPage)
  const page: PageProps = previewPage || props.data.page

  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const activeThemeId = themeSwitcherStore?.state.activeThemeId as ThemeId

  pageDebug('PageTemplate', props)
  if (!page.sections) {
    return 'No sections'
  }

  const globals: GlobalsProps = props.data.globals
  const keywords = globals.siteKeywords
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const siteMetadata: SiteMetadata = props.data.site.siteMetadata
  const siteVersion = siteMetadata.siteVersion
  const sections = page.sections

  const sectionProps = {
    locale,
    namedPaths,
    activeThemeId,

    globals,
    page,
    siteMetadata,

    sections,
  }
  const seoProps: SeoProps = {
    imageSrc: page.seoImage && page.seoImage.fluid && page.seoImage.fluid.src,
    keywords,
    locale,
    meta: [],
    pageDescription: page.seoDescription,
    pageHeading: page.seoTitle,
    siteAuthor: globals.siteAuthor,
    siteDescription: globals.siteDescription,
    siteHeading: globals.siteHeading,
    siteKeywords: globals.siteKeywords,
    siteVersion,
  }
  // Set theme background color
  const backgroundColor = getTheme(activeThemeId).colorMap.sectionBg

  return (
    <Fragment>
      <Global styles={classicGlobalReset} />
      <Global styles={htmlReset} />
      <Global
        styles={{
          body: {
            backgroundColor,
          },
        }}
      />
      <Seo {...seoProps} />
      <Sections {...sectionProps} />
      <PreviewUpdateButton />
    </Fragment>
  )
}

export default PageTemplate

export const query = graphql`
  query($pageId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
        siteUrl
        legal {
          version
          description
          url
        }
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

export interface SiteMetadata {
  siteVersion: string
  siteUrl: string
  legal: {
    version: string
    description: string
    url: string
  }
  secrets: {
    spaceId: string
    previewToken: string
    environment: string
  }
}
