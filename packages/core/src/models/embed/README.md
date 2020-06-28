# Embed

```jsx
import { Embed } from './embed'
<Embed
  title="Embed generated by boilerplate"
  code="console.log(props)"
  type="Code type"
/>
```

# Code types

Embed entries contain code. Different code types each have a different purpose.

## html

For media use. The entire code is inserted into the dom.

### Example

```html
<iframe
  id="player"
  type="text/html"
  width="640"
  height="390"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"
></iframe>
```

## js-action

Called on every action a visitor clicks.

### Example

```js
console.log('js-action event', eventId, props)
ReactGA.event({
  category: 'Navigation',
  action: eventId,
})
```

### Available variables

- eventId, the eventId specified with the action in the CMS
- props, all props that are passed to `src/page-template.tsx`.

## js-app

Called once at the start of the first page render. Not called on consequent page
renders.

### Example

```js
console.log('js-app event', props)
ReactGA.initialize('UA-000000-01')
```

### Available variables

- props, all props that are passed to `src/page-template.tsx`.

## js-page-section

Called when a page section scrolls into view.

### Example

```js
console.log('js-page-section event', eventId, props)
ReactGA.event({
  category: 'Navigation',
  action: eventId,
  nonInteraction: true,
})
```

### Available variables

- props, all props that are passed to the page section.
- eventId, the eventId specified with the page section in the CMS. The eventId
  is postfixed with `-in-viewport` or `-out-viewport`.

## js-page

This runs at the start of every page render.

### Example

```js
console.log('js-page event for path', props.path)
ReactGA.pageview(props.path)
```

### Available variables

- props, all props that are passed to `src/page-template.tsx`.