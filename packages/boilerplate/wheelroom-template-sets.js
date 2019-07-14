module.exports = [
  {
    name: 'fragments',
    loopComponents: true,
    templates: {
      fragmentTemplate: {
        path: '%component%.ts',
        options: { filter: ['subPage', 'section', 'global', 'part'] },
      },
    },
  },
  {
    name: 'component',
    questions: 'newModel',
    templates: {
      componentTemplate: {
        path: '%component%/%component%.ts',
        options: { filter: ['subPage', 'section', 'global', 'part'] },
      },
      componentBasicVarTemplate: {
        path: '%component%/%component%-basic-var.ts',
        options: { filter: ['subPage', 'section', 'global', 'part'] },
      },
    },
  },
  {
    name: 'config',
    questions: 'newModel',
    templates: {
      configReadmeTemplate: {
        path: '%component%/README.md',
        resolve: 'dist:templates',
        options: { filter: ['subPage', 'section', 'global', 'part'] },
      },
    },
  },
]
