# @wheelroom/styled-system

This package tries to mimic
[styled-system](https://github.com/styled-system/styled-system) functionality
and can be configured to be a drop in replacement.

## Project status

Needs multi platform testing.

The tests need to be hooked up to Travis that properly runs the tests on Windows
and Linux. It's been developed on macOs and builds on Netlify.

## Responsive

Responsive styles are generated with `facepaint`.

## Config

The `styled-system` package this package was based on has a fixed configuration. This implementation can be fully configured by a simple configuration file.

- [default-config.ts](https://github.com/jaccomeijer/styled-system/blob/master/src/styled-system/config/default-config.ts).

## Use with emotionCss

Create an `emotionCss` function that can parse your styles:

```
// Use your own project specific config and theme here
import { defaultConfig } from '@wheelroom/styled-system'
import { defaultTheme } from '@wheelroom/styled-system'
import { styledSystem } from '@wheelroom/styled-system'

export const emotionCss = (props: any) =>
  styledSystem(defaultConfig, defaultTheme, { ncss: props.ncss })
```

- [default-config.ts](https://github.com/jaccomeijer/styled-system/blob/master/src/styled-system/config/default-config.ts).
- [default-theme.ts](https://github.com/jaccomeijer/styled-system/blob/master/src/styled-system/config/default-theme.ts).

## A simple grid

```
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Box = (props: any) => (
  <div
    css={emotionCss({ ncss: { boxSizing: 'border-box', ...props.ncss } })}
    children={props.children}
  />
)

export const Flex = (props: any) => (
  <div
    css={emotionCss({
      ncss: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        ...props.ncss,
      },
    })}
    children={props.children}
  />
)

export const Container = (props: any) => {
  return (
    <div
      css={emotionCss({
        ncss: { mx: 'auto', maxWidth: '1024px', ...props.ncss },
      })}
      children={props.children}
    />
  )
}
```

## Link element example

```
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const ALink = (props: any) => (
  <a
    children={props.children}
    css={emotionCss({ ncss: { textDecoration: 'none', ...props.ncss } })}
    href={props.href}
  />
)
```
