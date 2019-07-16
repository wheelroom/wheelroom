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
      },
      graphqlFragment: {
        path: '%component%/graphql.ts',
      },
      indexBlock: {
        path: '%component%/index.ts',
      },
      indexSectionPart: {
        path: '%component%/index.ts',
      },
      indexSubPageGlobal: {
        path: '%component%/index.ts',
      },
      modelNoVariation: {
        path: '%component%/model.ts',
      },
      modelVariation: {
        path: '%component%/model.ts',
      },
      variations: {
        path: '%component%/variations.ts',
      },
      configReadme: {
        path: '%component%/README.md',
      },
    },
  },
]
