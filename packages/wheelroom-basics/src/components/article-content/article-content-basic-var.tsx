import * as React from 'react'

import { ArticleContentProps } from './article-content'

export const ArticleContentBasicVar = (props: ArticleContentProps) => {
  return (
    <div>
      <h2>ArticleContentBasic</h2>
      <p>{props.name}</p>
      <p>{props.about}</p>
    </div>
  )
}
