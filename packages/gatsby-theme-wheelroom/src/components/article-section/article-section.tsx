import * as React from 'react'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  data: any
}

export const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <div>
      <h2>ContentArticle</h2>
      <p>{props}</p>
    </div>
  )
}
