import { graphql } from 'gatsby'
import * as React from 'react'
import { getVariation } from '../../wh-ob'
import { variations } from './variations'

export interface ArticleContentProps {
  name: string
  about: string
  variation: string
}

export class ArticleContent extends React.Component<ArticleContentProps, {}> {
  public render() {
    const Variation = getVariation(this.props, variations)

    return (
      <div>
        <Variation {...this.props} />
      </div>
    )
  }
}

export const query = graphql`
  fragment ArticleContent on ContentfulArticleContent {
    articleText {
      articleText
    }
    author
    createdAt
    date
    image {
      title
      description
      fluid(maxWidth: 1024) {
        sizes
        src
        srcSet
      }
    }
    slug
    subTitle
    title
    updatedAt
  }
`
