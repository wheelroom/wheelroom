import { TemplateSets } from '@wheelroom/wheelroom-plugin-boilerplate'
import { baseComponentAsBoilerplate } from './base-component-as-boilerplate'
import { baseComponentAsPageSection } from './base-component-as-page-section'
import { componentIndex } from './component-index'
import { componentInterfaceOnly } from './component-interface-only'
import { componentReadme } from './component-readme'
import { componentAsPageSection } from './component-as-page-section'
import { componentAsBoilerplate } from './component-as-boilerplate'

export const boilerplateTemplates: TemplateSets = {
  react: {
    baseComponentAsBoilerplate: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/%component-name%.tsx',
      template: baseComponentAsBoilerplate,
    },
    baseComponentAsPageSection: {
      filterComponentSetting: 'asPageSection',
      path: '%component-name%/%component-name%.tsx',
      template: baseComponentAsPageSection,
    },
    componentAsPageSection: {
      filterComponentSetting: 'asPageSection',
      path: '%component-name%/%component-name%-%variation-name%-var.tsx',
      template: componentAsPageSection,
    },
    componentAsBoilerplate: {
      filterComponentSetting: 'asBoilerplate',
      path: '%component-name%/%component-name%-%variation-name%-var.tsx',
      template: componentAsBoilerplate,
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
