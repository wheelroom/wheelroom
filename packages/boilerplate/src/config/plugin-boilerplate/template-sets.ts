import { TemplateSets } from '@jacco-meijer/wheelroom-plugin-boilerplate'
import { component } from './component'
import { componentIndex } from './component-index'
import { componentInterfaceOnly } from './component-interface-only'
import { componentReadme } from './component-readme'
import { componentVariation } from './component-variation'

export const templateSets: TemplateSets = {
  react: {
    component: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/%component-name%.tsx',
      template: component,
    },
    componentBasicVar: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/%component-name%-%variation-name%-var.tsx',
      template: componentVariation,
    },
    componentIndex: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/index.ts',
      template: componentIndex,
    },
    componentIndex2: {
      filterComponentSetting: 'asQuery',
      path: '%component-name%/index.ts',
      template: componentIndex,
    },
    componentInterfaceOnly: {
      filterComponentSetting: 'asQuery',
      path: '%component-name%/%component-name%.tsx',
      template: componentInterfaceOnly,
    },
    componentReadme: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/README.md',
      template: componentReadme,
    },
  },
}
