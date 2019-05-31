import * as React from 'react'

import { ArticleSectionProps } from './article-section'

export class ArticleSectionLinkedVar extends React.Component<
  ArticleSectionProps,
  {}
> {
  public render() {
    return (
      <div>
        <h2>ArticleSectionLinked</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}
