import { graphql, useStaticQuery } from 'gatsby'
import { DataBlock } from './data-block'

const dataId = graphql`
  query buildTime {
    contentful {
      test {
      }
    }
  }
`

const GraphqlBuildTime = () => {
  const data = useStaticQuery(dataId)

  return (
    <>
      <h2>Fetched @build-time (graphql temlate)</h2>
      <DataBlock data={data} />
    </>
  )
}

export default GraphqlBuildTime
