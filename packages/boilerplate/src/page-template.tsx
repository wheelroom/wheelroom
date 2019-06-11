import { Container,  } from 'gatsby-theme-wheelroom'
import { createGlobalStyle } from 'styled-components'
import { getNamedPath } from '../../router/named-paths'
import { getPageImage, getArticleImage, getPageTypeInfo } from './get-meta-tags'
import { graphql } from 'gatsby'
import { productionDebug } from '../../libs/debug'
import { ThemeProvider } from 'styled-components'
import appTheme from '../../styling/theme'
import React from 'react'
import Sections from './sections'
import SEO from './seo'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

// This is the main template used for all pages. Adding a section property here
// will add the property to all sections. Also, changing SEO options here, will
// do so for all pages.
//
const PageTemplate = props => {
  productionDebug('PageTemplate', props)
  // When server side rendering, location is unavailable. In that case use
  // siteMetadata
  const allArticles = props.data.allArticles.edges.map(mapArg => mapArg.node)
  const globals = props.data.globals
  const locale = props.pageContext.locale
  const namedPaths = props.pageContext.namedPaths
  const page = props.data.page
  const pathName = page.pathName
  const siteUrl = props.location.origin || props.data.site.siteMetadata.siteUrl
  const siteVersion = props.data.site.siteMetadata.siteVersion
  const subPageArticle = props.data.subPageArticle

  // If this page is an article, the opener section will use the article image.
  // We need to do the same when getting an image for the meta tag.
  const image = getPageImage(page) || getArticleImage(subPageArticle)

  const locales = ['nl', 'en'].map(locale => {
    // Parse in slug if we have one
    const href = getNamedPath({
      locale,
      namedPaths,
      pathName,
      slug: pathName === 'article' ? subPageArticle.slug : undefined,
    })
    return {
      name: locale,
      href: siteUrl + href,
    }
  })

  return (
    <ThemeProvider theme={appTheme}>
      <Container>
        <GlobalStyle />
        <SEO
          description={
            pathName === 'article'
              ? subPageArticle.subTitle
              : page.seoDescription
          }
          image={image}
          locale={locale}
          locales={locales}
          siteAuthor={globals.siteAuthor}
          siteDescription={globals.siteDescription}
          siteKeywords={globals.siteKeywords}
          siteTitle={globals.siteTitle}
          title={pathName === 'article' ? subPageArticle.title : page.seoTitle}
          siteVersion={siteVersion}
          contentTypeInfo={getPageTypeInfo(page, subPageArticle)}
        />

        <Sections
          allArticles={allArticles}
          globals={globals}
          locale={locale}
          namedPaths={namedPaths}
          pathName={pathName}
          sections={page.sections}
          subPageArticle={subPageArticle}
        />
      </Container>
    </ThemeProvider>
  )
}

export default PageTemplate


// This is the main query for all pages. The query is passed the required id's
// from /gatsby-node.js. The id's are used to fetch the appropriate page,
// article and globals. Also all articles are fetched to be used on the article
// overview page.
//

export const query = graphql`
  query($pageId: String, $articleContentId: String, $globalsPartId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      navigationTitle
      path
      pathName
      seoDescription
      seoTitle
      sections {
        ... on Node {
          ...ArticleSection
        }
      }
    }
    articleContent: contentfulArticleContent(id: { eq: $articleContentId }) {
      ...ArticleContent
    }
    globalsPart: contentfulGlobalsPart(id: { eq: $globalsPartId }) {
      ...GlobalsPart
    }
  }
`
