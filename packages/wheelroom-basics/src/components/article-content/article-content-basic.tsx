import * as React from 'react'

export interface ArticleContentBasicProps {
  name: string
  about: string
}

export class ArticleContentBasic extends React.Component<
  ArticleContentBasicProps,
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
