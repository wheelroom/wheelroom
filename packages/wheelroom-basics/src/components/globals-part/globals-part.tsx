import { graphql } from 'gatsby'
import * as React from 'react'

export interface GlobalsPartProps {
  name: string
  about: string
}

export class GlobalsPart extends React.Component<GlobalsPartProps, {}> {
  public render() {
    return (
      <div>
        <h2>ContentArticle</h2>
        <p>{this.props.name}</p>
        <p>{this.props.about}</p>
      </div>
    )
  }
}

export const query = graphql`
  fragment GlobalsPart on ContentfulGlobalsPart {
    addressLine1
    addressLine2
    emailAddress
    heading
    siteAuthor
    siteDescription
    siteKeywords
    siteTitle
  }
`
