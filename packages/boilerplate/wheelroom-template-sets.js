module.exports = [
  {
    name: 'fragments',
    loopComponents: true,
    templates: {
      fragment: {
        path: '%component%.ts',
        options: { filter: ['subPage', 'section', 'global', 'part'] },
      },
    },
  },
  {
    name: 'demo-set',
    loopComponents: true,
    templates: {
      demo: {
        path: 'demo/%component%.md',
        resolve: `dist:templates`,
      },
    },
  },
  {
    name: 'components-base',
    templates: {
      defaults: {
        path: 'lib/defaults.ts',
      },
      sectionProps: {
        path: 'components/section-props.ts',
      },
    },
  },
  {
    name: 'components',
    loopComponents: true,
    templates: {
      componentBasicVar: {
        path: '%component%/%component%-basic-var.tsx',
        options: { filter: ['section', 'part', 'block'] },
      },
      componentIndex: {
        path: '%component%/index.ts',
        options: { filter: ['section', 'part', 'block'] },
      },
      componentReadme: {
        path: '%component%/README.md',
        options: { filter: ['section', 'part', 'block'] },
      },
      componentVariations: {
        path: '%component%/%component%.tsx',
        options: { filter: ['section', 'part', 'block'] },
      },
      componentNoVariations: {
        path: '%component%/%component%.tsx',
        options: { filter: ['section', 'part', 'block'] },
      },
    },
  },
  {
    name: 'config',
    questions: 'newModel',
    templates: {
      configReadme: {
        path: '%component%/README.md',
      },
      graphqlFragmentQuery: {
        path: '%component%/graphql.ts',
        options: { filter: ['subPage', 'global'] },
      },
      graphqlFragment: {
        path: '%component%/graphql.ts',
        options: { filter: ['section', 'part'] },
      },
      indexBlock: {
        path: '%component%/index.ts',
        options: { filter: ['block'] },
      },
      indexSectionPart: {
        path: '%component%/index.ts',
        options: { filter: ['section', 'part'] },
      },
      indexSubPageGlobal: {
        path: '%component%/index.ts',
        options: { filter: ['subPage', 'global'] },
      },
      modelNoVariation: {
        path: '%component%/model.ts',
        options: { filter: ['subPage', 'global'] },
      },
      modelVariation: {
        path: '%component%/model.ts',
        options: { filter: ['section', 'part', 'block'] },
      },
    },
  },
]
