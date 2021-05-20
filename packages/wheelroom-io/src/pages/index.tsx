import { AnyStyle, Div } from '@wheelroom/any/elements'
import { Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'
import React from 'react'
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

const Block = (props: any) => (
  <Div css={{ width: '350px', height: '30px' }} {...props} />
)

const HomePage = () => {
  return (
    <>
      <Global styles={globalReset} />
      <Div css={objectStyles}>
        <h1>Gatsby + TypeScript + Any (emotion/normalize.css)</h1>
        <GraphqlBuildTime />
        <Block css={{ backgroundColor: 'var(--colors-berry)' }} />
        <Block css={{ backgroundColor: 'var(--colors-orange)' }} />
        <Block css={{ backgroundColor: 'var(--colors-mango)' }} />
        <Block css={{ backgroundColor: 'var(--colors-banana)' }} />
        <Block css={{ backgroundColor: 'var(--colors-kiwi)' }} />
        <Block css={{ backgroundColor: 'var(--colors-apple)' }} />
        <Block css={{ backgroundColor: 'var(--colors-melon)' }} />
      </Div>
    </>
  )
}

export default HomePage
