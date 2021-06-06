import { Div, H1, P } from '@wheelroom/any/elements'
import { graphql, PageProps } from 'gatsby'
import React from 'react'

type Topic = {
  abstract: string
  heading: string
  icon: string
  sys: {
    id: string
  }
}

type TopicSection = {
  variation: string
  topicsCollection: {
    items: Topic[]
  }
  sys: {
    id: string
  }
}

type Page = {
  sectionsCollection: {
    items: TopicSection[]
  }
}

type PageQuery = {
  contentful: {
    page: Page
  }
}

interface PageContext {
  pageId: string
  pagePath: string
}

const Page = (props: PageProps<PageQuery, PageContext>) => {
  console.log(props.pageContext.pageId)
  const page = props.data.contentful.page
  return (
    <>
      {page.sectionsCollection.items.map((section: TopicSection) => (
        <div key={section.sys.id}>
          {section.topicsCollection.items.map((topic) => (
            <Div key={topic.sys.id}>
              <H1>{topic.heading}</H1>
              <P>{topic.abstract}</P>
            </Div>
          ))}
        </div>
      ))}
    </>
  )
}
export default Page

export const dataId = graphql`
  query data($pageId: String!) {
    contentful {
      page(id: $pageId) {
        sectionsCollection {
          items {
            ... on Contentful_TopicSection {
              sys {
                id
              }
              variation
              topicsCollection {
                items {
                  sys {
                    id
                  }
                  abstract
                  heading
                  icon
                }
              }
            }
          }
        }
      }
    }
  }
`
