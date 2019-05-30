import * as React from 'react'

export interface ArticleSectionLinkedProps {
  name: string
  about: string
}

export class ArticleSectionLinked extends React.Component<ArticleSectionLinkedProps, {}> {
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

