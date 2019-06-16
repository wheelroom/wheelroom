import * as React from 'react'

import { ArticleSectionProps } from './article-section'

export const ArticleSectionInlineVar = (props: ArticleSectionProps) => {
  return (
    <div>
      <h2>ArticleSectionInline</h2>
      <p>{props.data}</p>
    </div>
  )
}
