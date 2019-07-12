path = require('path')

// WIP Working towards new modular setup
module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `@jacco-meijer/content-models`,
  componentTypes: {
    articleSection: {},
    myNewComponent: {
      resolve: 'dist:component-configs',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        initialPageSection: 'articleSection',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `@jacco-meijer/content-models`,
        templateSets: {
          fragments: {
            fragmentTemplate: {
              fileName: '%componentFilename%.ts',
              resolve: '@jacco-meijer/content-models',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
          component: {
            component: {
              fileName: '%componentFilename%/%componentFilename%.ts',
              resolve: 'dist:component-templates',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
            componentBasicVar: {
              fileName: '%componentFilename%/%componentFilename%-basic-var.ts',
              resolve: 'dist:component-templates',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
          config: {
            graphql: {
              fileName: '%componentFilename%/graphql.ts',
              resolve: 'dist:component-templates',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
        },
      },
    },
  ],
}
