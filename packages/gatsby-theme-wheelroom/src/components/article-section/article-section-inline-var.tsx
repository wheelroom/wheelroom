import * as React from 'react'

import { ArticleSectionProps } from './article-section'

export const ArticleSectionInlineVar = ({ data }: ArticleSectionProps) => {
  return (
    <div>
      <h2>ArticleSectionInline</h2>
      <p>{data}</p>
    </div>
  )
}
