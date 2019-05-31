import * as React from 'react'

import { ArticleContentProps } from './article-content'

export class ArticleContentBasicVar extends React.Component<
  ArticleContentProps,
  {}
> {
  public render() {
    return (
      <div>
        <h2>ArticleContentBasic</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}
