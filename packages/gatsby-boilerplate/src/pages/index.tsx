import { graphql } from 'gatsby'
import * as React from 'react'
import { Hello } from 'wheelroom'

interface IndexPageProps {
  data: {}
}

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        <p>Yes it works good yes thank you</p>
        <Hello name="Iemand" about="Over" />
        <Hello name="Ander iemand" about="Over de ander" />
      </div>
    )
  }
}
