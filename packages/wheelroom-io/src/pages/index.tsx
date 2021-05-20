import { AnyStyle, Div } from '@wheelroom/any/elements'
import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'
import GraphqlBuildTime from '../components/graphql-build-time'

export const objectStyles: AnyStyle = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
  fontWeight: 'normal',
  padding: 16,
  fontSize: 16,
}

const HomePage = () => {
  return (
    <>
      <Global styles={globalReset} />
      <Div css={objectStyles}>
        <h1>Gatsby + TypeScript + Any (emotion/normalize.css)</h1>
        <GraphqlBuildTime />
      </Div>
    </>
  )
}

export default HomePage
