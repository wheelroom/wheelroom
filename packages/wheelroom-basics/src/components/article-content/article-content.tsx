import * as React from 'react'
import { getVariation } from 'wheelroom'
import { variations } from './variations'

export interface ArticleContentProps {
  name: string
  about: string
  variation: string
}

export class ArticleContent extends React.Component<ArticleContentProps, {}> {
  public render() {
    const Variation = getVariation(this.props, variations)

    return (
      <div>
        <Variation {...this.props} />
      </div>
    )
  }
}
