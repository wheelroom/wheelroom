# @jacco-meijer/styled-system

This package tries to mimic `styled-system` functionality and can be configured
to be a drop in replacement.

## POC

Project status still is Proof Of Concept. The package runs on some small
production sites. There's a simple test in place that covers all functionality.

It should be hooked up to Travis where the test can run for Windows and Linux.
It's been developed on macOs and only tested for that os.

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
