import { Global } from '@emotion/core'
import { graphql } from 'gatsby'
import React, { Fragment, useContext, useState } from 'react'
import { pageDebug } from '../wheelroom/lib/debug'
import { Seo, SeoProps } from '../wheelroom/lib/seo'
import { Sections } from './sections'
import {
  PreviewUpdateButton,
  useFetchPreviewPage,
} from '@wheelroom/admin-page-preview'
import { classicGlobalReset } from '../wheelroom/global-reset/classic-global-reset'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import { htmlReset } from '../wheelroom/global-reset/html-reset'
import { getTheme } from '../themes/themes'
import { ThemeId } from '../admin-resources/theme-info'
import { useEmbeds } from '../wheelroom/models/embed/use-embed'
import { GlobalsProps } from '../wheelroom/models/globals/model-types'
import { BlogProps } from '../wheelroom/models/blog/model-types'
import { PageProps } from '../wheelroom/models/page/model-types'

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.

const PageTemplate = (props: any) => {
  // Run global embeds
  useEmbeds(props)

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
  const blog: BlogProps = props.data.blog
  const allBlog: BlogProps[] = props.data.allBlog
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
    blog,
    allBlog,
    page,
    siteMetadata,

    sections,
  }

  const pageImageSrc =
    (page.seoImage && page.seoImage.fluid && page.seoImage.fluid.src) || ''
  const blogImageSrc =
    (blog.seoImage && blog.seoImage.fluid && blog.seoImage.fluid.src) || ''
  const siteImageSrc =
    (globals.siteImage &&
      globals.siteImage.fluid &&
      globals.siteImage.fluid.src) ||
    ''
  const blogAuthor =
    (Array.isArray(blog.authors) &&
      blog.authors.length > 0 &&
      blog.authors[0].heading) ||
    ''
  const seoProps: SeoProps = {
    authorArray: [blogAuthor, globals.siteAuthor],
    descriptionArray: [
      page.seoDescription,
      blog.seoDescription,
      globals.siteDescription,
    ],
    headingArray: [page.seoTitle, blog.seoTitle, globals.siteHeading],
    imageSrcArray: [pageImageSrc, blogImageSrc, siteImageSrc],
    keywordsArray: [page.seoKeywords, blog.seoKeywords, globals.siteKeywords],
    locale,
    meta: [],
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
  query($pageId: String, $globalsId: String, $blogId: String) {
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
    blog: contentfulBlog(id: { eq: $blogId }) {
      ...Blog
    }
    allBlog: allContentfulBlog(
      filter: { node_locale: { eq: "en-US" } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          ...Blog
        }
      }
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
