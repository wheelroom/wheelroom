import { componentBasicVar } from './component-basic-var'
import { componentIndex } from './component-index'
import { componentReadme } from './component-readme'
import { componentVariations } from './component-variations'

export const templateSets = [
  {
    name: 'components',
    loopComponents: true,
    templates: {
      componentBasicVar: {
        path: '%component%/%component%-basic-var.tsx',
        template: componentBasicVar,
      },
      componentIndex: {
        path: '%component%/index.ts',
        template: componentIndex,
      },
      componentReadme: {
        path: '%component%/README.md',
        template: componentReadme,
      },
      componentVariations: {
        path: '%component%/%component%.tsx',
        template: componentVariations,
      },
    },
  },
]
