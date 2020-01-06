# @jacco-meijer/wheelroom-plugin-boilerplate

This is a plugin for the `wheelroom` package.

## Commands

This plugin adds the `create-boilerplate` command which lets you create boilerplate
code from component data.

```
wheelroom create-boilerplate <template-set> <path> [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```javascript
var templateSets = require('./wheelroom-template-sets')

module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-boilerplate',
      options: {
        templateSets: templateSets,
      },
    },
  ],
}
```

### Template sets

Using typescript, template sets are defined like this. 

```typescript
import { TemplateSets } from '@jacco-meijer/wheelroom-plugin-boilerplate'
import { component } from './component'
import { componentIndex } from './component-index'
import { componentReadme } from './component-readme'
import { componentVariation } from './component-variation'

export const templateSets: TemplateSets = {
  components: {
    component: {
      path: '%component-name%/%component-name%.tsx',
      template: component,
    },
    componentBasicVar: {
      path: '%component-name%/%component-name%-%variation%-var.tsx',
      template: componentVariation,
    },
    componentIndex: {
      path: '%component-name%/index.ts',
      template: componentIndex,
    },
    componentReadme: {
      path: '%component-name%/README.md',
      template: componentReadme,
    },
  },
}
```
