# @jacco-meijer/styled-system

This package tries to mimic `styled-system` functionality and can be configured
to be a drop in replacement.

## POC

This is a simple Proof Of Concept. The package works but has not been tested in
any way.

Performance is unknown. No tests yet and a very poor typescript implementation.

## Responsive

Responsive styles are generated with `facepaint`.

## Config

All configuration is in one file:
[config.ts](./src/styled-system/config.ts).

## Parsing

It's rather simple, all parsing is done in
[parse-styles.ts](./src/styled-system/parse-styles.ts).

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
