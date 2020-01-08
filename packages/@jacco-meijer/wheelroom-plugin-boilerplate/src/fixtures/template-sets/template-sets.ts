import { TemplateSets } from '../../types/template-sets'
import { component } from './component'
import { componentIndex } from './component-index'
import { componentReadme } from './component-readme'
import { componentVariation } from './component-variation'

export const templateSets: TemplateSets = {
  react: {
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
