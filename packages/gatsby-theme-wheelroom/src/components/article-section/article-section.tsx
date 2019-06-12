import * as React from 'react'
import { Box } from '../../lib/styling/grid'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  data: any
  landMark: any
  locale: any
}

export const ArticleSection = (props: ArticleSectionProps) => {
  return (
    <div>
      <Box w={[1, 1 / 2]} bg="yellow">
        <h2>ContentArticle</h2>
        <p>{props.landMark}</p>
        <p>{props.locale}</p>
      </Box>
      <Box w={[1, 1 / 2]} bg="cyan">
        <h2>ContentArticle</h2>
        <p>{props.landMark}</p>
        <p>{props.locale}</p>
      </Box>
    </div>
  )
}
