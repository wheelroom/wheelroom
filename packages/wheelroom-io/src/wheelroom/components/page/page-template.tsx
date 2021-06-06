import React, { Fragment, useContext, useState } from 'react'
import { Global } from '@emotion/core'
// import { graphql } from 'gatsby'
import {
  PreviewUpdateButton,
  useFetchPreviewPage,
} from '@wheelroom/admin-page-preview'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getThemeSwitcherStore } from '@wheelroom/admin-theme-switcher'
import {
  classicGlobalReset,
  CoreSiteMetadata,
  GlobalsModel,
  htmlReset,
  PageModel,
  useEmbeds,
} from '@wheelroom/core'
import { Sections } from './sections'
import { sectionWheels } from './section-wheels'
import { SeoProps } from './seo-props'
import { Seo } from './seo'

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.

const PageTemplate = (props: any) => {
  // Run global embeds
  useEmbeds(props)

  // Page preview admin module
  const [previewPage, setPreviewPage] = useState()
  useFetchPreviewPage(setPreviewPage)
  const page: PageModel = previewPage || props.data.page

  // Theme switcher admin module
  const { adminCoreState } = useContext(AdminCoreContext)
  const themeSwitcherStore = getThemeSwitcherStore(adminCoreState)
  const activeThemeId = themeSwitcherStore?.state.activeThemeId

  if (!page.sections) {
    return 'No sections'
  }

  const globals: GlobalsModel = props.data.globals
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const siteMetadata: CoreSiteMetadata = props.data.site.siteMetadata
  const siteVersion = siteMetadata.siteVersion
  const sections = page.sections
  const sectionProps: any = {
    locale,
    namedPaths,
    activeThemeId,

    globals,
    page,
    siteMetadata,

    sections,
    sectionWheels,
  }

  const pageImageSrc =
    (page.seoImage && page.seoImage.fluid && page.seoImage.fluid.src) || ''
  const siteImageSrc =
    (globals.siteImage &&
      globals.siteImage.fluid &&
      globals.siteImage.fluid.src) ||
    ''
  const seoProps: SeoProps = {
    authorArray: [globals.siteAuthor],
    descriptionArray: [page.seoDescription, globals.siteDescription],
    headingArray: [page.seoTitle, globals.siteHeading],
    imageSrcArray: [pageImageSrc, siteImageSrc],
    keywordsArray: [page.seoKeywords, globals.siteKeywords],
    locale,
    meta: [],
    siteVersion,
  }
  // Set theme background color
  const backgroundColor =
    sectionWheels.themes[activeThemeId || sectionWheels.defaultThemeId]
      .wrSystemTheme.colorMap.sectionBg
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

// export const query = graphql`
//   query($pageId: String, $globalsId: String) {
//     site {
//       siteMetadata {
//         siteVersion
//         siteUrl
//         legal {
//           version
//           description
//           url
//         }
//         secrets {
//           spaceId
//           previewToken
//           environment
//         }
//       }
//     }
//     page: contentfulPage(id: { eq: $pageId }) {
//       ...Page
//     }
//     globals: contentfulGlobals(id: { eq: $globalsId }) {
//       ...Globals
//     }
//   }
// `
