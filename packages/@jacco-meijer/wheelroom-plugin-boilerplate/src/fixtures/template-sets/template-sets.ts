import { TemplateSets } from '../../types/template-sets'
import { componentBasicVar } from './component-basic-var'
import { componentIndex } from './component-index'
import { componentReadme } from './component-readme'
import { componentVariations } from './component-variations'

export const templateSets: TemplateSets = {
  components: {
    componentBasicVar: {
      path: '%component-name%/%component-name%-basic-var.tsx',
      template: componentBasicVar,
    },
    componentIndex: {
      path: '%component-name%/index.ts',
      template: componentIndex,
    },
    componentReadme: {
      path: '%component-name%/README.md',
      template: componentReadme,
    },
    componentVariations: {
      path: '%component-name%/%component-name%.tsx',
      template: componentVariations,
    },
  },
}
