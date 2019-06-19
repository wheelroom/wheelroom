export const componentBasicVarTemplate = `
import * as React from 'react'

import { ArticleContentProps } from './article-content'

export const ArticleContentBasicVar = (props: ArticleContentProps) => {
  return (
    <div>
      <h2>ArticleContentBasic</h2>
      <p>{props.data}</p>
    </div>
  )
}
`
