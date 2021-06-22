# Wheelroom wheelroom-io

## Component props interface

- Changing a library that many apps depend on has great impact
- To minimize the impact all components use the same interface
- Prevent breaking changes and do not use any other props
- `MyCompProps.model?.field?`: model itself and all fields are optional
- `MyCompProps.options?`: options are optional booleans
- `MyCompProps.variant?`: without variant a default is returned
- `MyCompProps.events?`: events are optional
- Export a `myCompStyleFactory` factory function that returns a style object

## Code example

```ts
export type MyComp = {
  heading?: string
  abstract?: string
}
export type MyCompVariant = 'primary' | 'secondary'
export type MyCompOptions = ComponentOptions<'reversedOrder' | 'hideMedia'> 
export type MyCompEvents = { handleClick: () => void }
export type MyCompProps = ComponentProps<MyComp, MyCompVariant, MyCompOptions>['div']

export const myCompStyleFactory: StyleFactory<MyCompVariant, MyCompOptions> = (args) => {
  const useVariant = args.variant || 'primary'
  const baseStyle = styleMap[useVariant]
  return [
    baseStyle,
    args.options?.reversedOrder && reversedOrderOptionStyle,
    args.options?.hideMedia && hideMediaOptionStyle,
  ]
}

export const MyComp = ({
  model,
  children,
  options,
  variant,
  ...props
}: MyCompProps) => {
  const css: any = myCompStyleFactory({
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
<Heading>{data.heading}</Heading>
<Abstract>{data.abstract}</Abstract>
<img src={url} />
```

### Models

Models contain elements. This is the level where visual components meet data
models. The `model` props passes the data. Examples:

```html
<Topic model={topic} />
<Navigation model={navigation} />
<Action model={action} />
<image model={image} />
```

### Sections

Sections contain models. Examples:

```html
<TextSection model={textSection} />
<NavigationSection model={navigationSection} />
<TopicSection model={topicSection} >
```
