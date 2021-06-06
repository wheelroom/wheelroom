import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql, PageProps } from 'gatsby'
import { CSSObject, Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'
import React from 'react'
import { GlobalsProvider } from '../../lib/globals-provider'
import { PageQuery } from './page-model'
import { Sections } from './sections'

export const fontStyle: CSSObject = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
}

interface PageContext {
  pageId: string
  pagePath: string
}

const PageTemplate = (props: PageProps<PageQuery, PageContext>) => {
  const page = props.data.contentful.page
  const globals = props.data.contentful.globals
  const site = props.data.site
  return (
    <GlobalsProvider value={{ globals, site }}>
      <Global styles={globalReset} />
      <Div css={fontStyle}>
        <Sections sections={page.sectionsCollection.items} />
      </Div>
    </GlobalsProvider>
  )
}
export default PageTemplate

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
