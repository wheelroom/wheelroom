# @jacco-meijer/styled-system

This package tries to mimic
[styled-system](https://github.com/styled-system/styled-system) functionality
and can be configured to be a drop in replacement.

## Project status

Project status still is Proof Of Concept. The package runs on some small
production sites. There's a simple test in place that covers all functionality.

The tests need to be hooked up to Travis that properly runs the tests on Windows
and Linux. It's been developed on macOs and builds on Netlify.

Performance is good at first sight, but largely untested.

## Responsive

Responsive styles are generated with `facepaint`.

## Config

All configuration is in one file:
[config.ts](./src/styled-system/config/config.ts).

## Core elements

The package contains some core elements to be used with @emotion/core:

```
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const ALink = (props: any) => (
  <a
    children={props.children}
    css={styledSystem({ textDecoration: 'none', ...props })}
    href={props.href}
  />
)
```

## Nested css

`Emotion.sh` these days parses nested css like this:

```
{
  '>ul>li': {
    margin: 0,
  },
}
```

Styled system with the existing API could not handle nested properties like this:

```
{
  '>ul>li>p': {
    mx: 0,
  },
}
```

This is because all props are passed to styled system and unknown props simply
pass through. Going through all nested props this way is very inefficient.

The easiest solution is not to pass all props to styled system. That would
however break the current API.

`<div m={1} />` would become `<div ncss={{ m: 1 }} />`

That is why this version supports the current API and adds a `ncss` prop. Props
from the current API are handled as usual. All css in the `ncss` object handles
nested css.

```
{
  ncss: {
    '>ul>li>p': {
      mx: 0,
    },
  }
}
```

A core element that handles only nested css looks like this:

```
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '@jacco-meijer/styled-system'

export const ALink = (props: any) => (
  <a
    children={props.children}
    css={styledSystem( { ncss: { textDecoration: 'none', ...props.ncss }} )}
    href={props.href}
  />
)
```
