import * as React from 'react'

export interface GlobalsPartBasicProps {
  name: string
  about: string
}

export class GlobalsPartBasic extends React.Component<
  GlobalsPartBasicProps,
  {}
> {
  public render() {
    return (
      <div>
        <h2>GlobalsPartBasic</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}
