import { graphql } from 'gatsby'
import * as React from 'react'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string
        tagline: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata

    return (
      <div>
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>Yes it works good yes thank you</p>
      </div>
    )
  }
}
