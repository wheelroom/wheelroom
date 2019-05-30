import * as React from 'react'

export interface ArticleSectionInlineProps {
  name: string
  about: string
}

export class ArticleSectionInline extends React.Component<ArticleSectionInlineProps, {}> {
  public render() {
    return (
      <div>
        <h2>ArticleSectionInline</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}
