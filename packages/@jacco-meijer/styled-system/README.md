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

Styled system with the existing API does not process nested css properties like
this:

```
{
  '>ul>li>p': {
    mx: 0,
  },
}
```

This is because a shallow evaluation of all properties of a React element is
simple, but an efficient deep evaluation of all properties is a complex thing.

To efficiently handle nested css properties these properties need to be passed
to styled system separately. By adding these objects to the special `ncss`
(derived from Nested CSS) property for example. The API would then look like
this:

`<div ncss={'>ul>li>p':{mx:0}} />`

Because moving all properties to a `ncss` object would break the current API, this version supports both the current behavior as well as the `ncss` property for
nested properties.

The next major version will only have support for the `ncss` object.

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
