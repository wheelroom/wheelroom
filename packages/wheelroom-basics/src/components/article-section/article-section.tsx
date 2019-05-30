import { graphql } from 'gatsby'
import * as React from 'react'

export interface ArticleSectionProps {
  name: string
  about: string
}

export class ArticleSection extends React.Component<ArticleSectionProps, {}> {
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
  fragment ArticleSection on ContentfulArticleSection {
    articleText {
      articleText
    }
    variation
  }
`
