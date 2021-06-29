import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/react'
import { graphql, PageProps } from 'gatsby'
import { GlobalsProvider } from '../../lib/globals-provider'
import { ContentfulGlobals } from './contentful-globals'
import { PageSection } from './page-section'
import { ContentfulPage } from './contentful-page'

export const fontStyle = {
  body: {
    fontFamily: `-apple-system, BlinkMacSystemFont,
    “Segoe UI”, “Roboto”, “Oxygen”,
    “Ubuntu”, “Cantarell”, “Fira Sans”,
    “Droid Sans”, “Helvetica Neue”, sans-serif`,
  },
}

export type PageQuery = {
  contentful: {
    page: ContentfulPage
    globals: ContentfulGlobals
  }
  site: unknown
}

export type PageContext = {
  pageId: string
  pagePath: string
}

const Page = (props: PageProps<PageQuery, PageContext>) => {
  const page = props.data.contentful.page
  const globals = props.data.contentful.globals
  const site = props.data.site
  console.log('pageId', props.pageContext.pageId)
  return (
    <GlobalsProvider value={{ globals, site }}>
      <Global styles={[globalReset, fontStyle]} />
      <PageSection
        model={{ contentfulPageSections: page.sectionsCollection?.items }}
      />
    </GlobalsProvider>
  )
}
export default Page

export const queryId = graphql`
  query ($pageId: String!, $globalsId: String!) {
    contentful {
      page(id: $pageId) {
        ...Wheelroom_Page
      }
      globals(id: $globalsId) {
        ...Wheelroom_Globals
      }
    }
    site {
      ...Gatsby_Site
    }
  }
`
