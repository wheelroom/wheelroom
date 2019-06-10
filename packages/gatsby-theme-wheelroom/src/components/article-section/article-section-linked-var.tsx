import * as React from 'react'

import { ArticleSectionProps } from './article-section'

export const ArticleSectionLinkedVar = ({ data }: ArticleSectionProps) => {
  return (
    <div>
      <h2>ArticleSectionLinked</h2>
      <p>{data}</p>
    </div>
  )
}
