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
    name: 'component',
    questions: 'newModel',
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
      component: {
        path: '%component%/%component%.tsx',
        options: { filter: ['section', 'part', 'block'] },
      },
      getVariation: {
        path: 'get-variation.tsx',
      },
      sectionProps: {
        path: 'section-props.ts',
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
      variations: {
        path: '%component%/variations.ts',
        options: { filter: ['section', 'part', 'block'] },
      },
    },
  },
]
