import { graphql } from 'gatsby'
import * as React from 'react'

export interface ArticleContentProps {
  name: string
  about: string
}

export class ArticleContent extends React.Component<ArticleContentProps, {}> {
  public render() {
    return (
      <div>
        <h2>ContentArticle</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
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
