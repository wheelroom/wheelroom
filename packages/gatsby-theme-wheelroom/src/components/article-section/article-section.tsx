import * as React from 'react'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  data: any
  landMark: any
  locale: any
}

export const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <div>
      <h2>ContentArticle</h2>
      <p>{props.landMark}</p>
      <p>{props.locale}</p>
    </div>
  )
}
