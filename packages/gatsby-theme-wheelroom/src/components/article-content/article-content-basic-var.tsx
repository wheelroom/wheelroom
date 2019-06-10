import * as React from 'react'

import { ArticleContentProps } from './article-content'

export const ArticleContentBasicVar = ({ data }: ArticleContentProps) => {
  return (
    <div>
      <h2>ArticleContentBasic</h2>
      <p>{data}</p>
    </div>
  )
}
