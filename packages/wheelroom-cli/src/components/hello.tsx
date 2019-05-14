import * as React from 'react'

export interface HelloProps {
  compiler: string
  framework: string
}

export class Hello extends React.Component<HelloProps, {}> {
  public render() {
    return (
      <div>
        <h2>Hello</h2>
        <p>World!</p>
      </div>
    )
  }
}
