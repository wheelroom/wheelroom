import { H2 } from '@wheelroom/any/elements'
import { graphql, useStaticQuery } from 'gatsby'
import { DataBlock } from './data-block'

const dataId = graphql`
  query buildTime {
    contentful {
      testCollection {
        items {
          heading
        }
      }
    }
  }
`

const GraphqlBuildTime = () => {
  const data = useStaticQuery(dataId)
  return (
    <>
      <H2>Fetched @build-time (graphql template)</H2>
      <DataBlock data={data} />
    </>
  )
}

export default GraphqlBuildTime
