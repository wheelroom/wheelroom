import * as React from 'react'

import { ArticleSectionProps } from './article-section'

export const ArticleSectionLinkedVar = (props: ArticleSectionProps) => {
  return (
    <div>
      <h2>ArticleSectionLinked</h2>
      <p>{props}</p>
    </div>
  )
}
