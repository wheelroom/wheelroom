import * as React from 'react'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  data: any
}

export const ArticleSection = ({ data }: ArticleSectionProps) => {
  return (
    <div>
      <h2>ContentArticle</h2>
      <p>{data}</p>
    </div>
  )
}
