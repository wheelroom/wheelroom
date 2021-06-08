import { Div } from '@wheelroom/any/elements'
import { CSSObject, Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'
import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { GlobalsProvider } from '../../lib/globals-provider'
import { TopicSection } from '../topic-section/topic-section'
import { Sections } from './sections'

export type Page = {
  sectionsCollection: {
    items: TopicSection[]
  }
}

export const fontStyle: CSSObject = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
}

export type PageQuery = {
  contentful: {
    page: Page
    globals: any
  }
  site: any
}

export interface PageContext {
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
      <Global styles={globalReset} />
      <Div css={fontStyle}>
        <Sections models={page.sectionsCollection.items} />
      </Div>
    </GlobalsProvider>
  )
}
export default Page

export const queryId = graphql`
  query ($pageId: String!, $globalsId: String!) {
    contentful {
      page(id: $pageId) {
        ...Page
      }
      globals(id: $globalsId) {
        ...Globals
      }
    }
    site {
      ...GatsbySite
    }
  }
`

export const pageFragment = graphql`
  fragment Page on Contentful_Page {
    sectionsCollection(limit: 10) {
      items {
        ...TopicSection
      }
    }
  }
`
