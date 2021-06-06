import { Div, H1 } from '@wheelroom/any/elements'
import { CSSObject, Global } from '@emotion/react'
import { globalReset } from '@wheelroom/any/resets/global-reset'
import React from 'react'
import { FeatherIcon } from '../wheelroom/components/feather-icon'
import { GlobalsProvider } from '../wheelroom/lib/globals-provider'
import { Action } from '../wheelroom/components/action/action'

export const fontStyle: CSSObject = {
  fontFamily: `-apple-system, BlinkMacSystemFont,
  “Segoe UI”, “Roboto”, “Oxygen”,
  “Ubuntu”, “Cantarell”, “Fira Sans”,
  “Droid Sans”, “Helvetica Neue”, sans-serif`,
}

const blockStyle: CSSObject[] = [
  fontStyle,
  {
    width: 350,
    height: 30,
  },
]

interface BlockProps {
  children?: React.ReactNode
  css?: CSSObject
}

const Block = ({ children, ...props }: BlockProps) => (
  <Div css={blockStyle} {...props}>
    {children}
  </Div>
)

const iconAttrs: CSSObject = { width: 50, height: 50 }

const globals = {
  usePreview: false,
  testString: 'test-success',
}

const HomePage = () => {
  return (
    <GlobalsProvider value={globals}>
      <Global styles={globalReset} />
      <Div css={{ padding: 16 }}>
        <H1 css={fontStyle}>
          Gatsby + TypeScript + Any (emotion/normalize.css)
        </H1>
        <Block css={{ backgroundColor: 'var(--colors-berry)' }}>
          Taste the rainbow!
        </Block>
        <Block css={{ backgroundColor: 'var(--colors-orange)' }} />
        <Block css={{ backgroundColor: 'var(--colors-mango)' }} />
        <Block css={{ backgroundColor: 'var(--colors-banana)' }} />
        <Block css={{ backgroundColor: 'var(--colors-kiwi)' }} />
        <Block css={{ backgroundColor: 'var(--colors-apple)' }} />
        <Block css={{ backgroundColor: 'var(--colors-melon)' }} />
      </Div>
      <Div>
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-orange)' }}
        />
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-mango)' }}
        />
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-banana)' }}
        />
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-kiwi)' }}
        />
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-apple)' }}
        />
        <FeatherIcon
          name="arrow-right-circle"
          attrs={{ ...iconAttrs, color: 'var(--colors-melon)' }}
        />
      </Div>
      <Div>
        <Action node={{ url: '//wheelroom.io', heading: 'Action me' }} />
      </Div>
    </GlobalsProvider>
  )
}

export default HomePage
