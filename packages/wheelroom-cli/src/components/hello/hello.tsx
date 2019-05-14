import * as React from 'react'

export interface HelloProps {
  name: string
  about: string
}

export default class Hello extends React.Component<HelloProps, {}> {
  public render() {
    return (
      <div>
        <h2>Hello there!</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}
