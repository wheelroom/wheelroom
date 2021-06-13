# Wheelroom wheelroom-io

## Component props interface

- See code example below
- Changing a library that many apps depend on has great impact
- To minimize the impact all components use the same interface
- Prevent breaking changes and do not use any other props
- `MyCompProps.model?.field?`: model itself and all fields are optional
- `MyCompProps.options?`: options are optional booleans
- `MyCompProps.variant?`: without variant a default is returned
- `MyCompProps.events?`: events are optional

## Component variant styling

- Export a `myCompStyleFactory` factory function that returns a style object

## Code example

```ts
export type MyComp = {
  heading?: string
  abstract?: string
}
export type MyCompVariant = 'primary' | 'secondary'
export type MyCompOption = 'reversedOrder' | 'hideMedia'
export type MyCompOptions = Partial<Record<MyCompOption, boolean>>
export type MyCompEvents = { handleClick: () => void }

export const myCompStyleFactory = (args: {
  variant?: MyCompVariant
  options?: MyCompOptions
}) => {
  const useVariant = args.variant || 'primary'
  const baseStyle = styleMap[useVariant]
  return [
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ]
}

type AnyDivProps = AnyProps['div']
export interface MyCompProps extends AnyDivProps {
  model?: MyComp
  options?: MyCompOptions
  variant?: MyCompVariant
  events?: MyCompEvents
}

export const MyCom = ({
  model,
  children,
  options,
  variant,
  ...props
}: MyCompProps) => {
  const css: any = cardStyleFactory({
    options,
    variant,
  })
  model = model || {}

  return (
    <Div css={css} {...props}>
      <H1>{model.heading}</H1>
      {children}
    </Div>
  )
}
```

## Component naming convention

Only the word 'component' is too generic, this project defines specific
component names with a scope.

### Elements

Elements are the smallest components. Data is added in the way the html element
expexts the data. Examples:

```html
<Heading>data</Heading>
<Abstract>data</Abstract>
<img src="https://url" />
```

### Models

Models contain elements. This is the level where visual components meet data
models. The `models` props passes the data. Examples:

```html
<Topic model="{topic}" />
<Navigation model="{navigation}" />
<Action model="{action}" />
<image model="{image}" />
```

### Sections

Sections contain models. Examples:

TODO: use model prop for sections?

```html
<TextSection model="{textSection}" />
<NavigationSection model="{navigationSection}" />
<TopicSection>
  <TopicSection> <TopicSection> </TopicSection> </TopicSection
></TopicSection>
```
