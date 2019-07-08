path = require('path')

// WIP Working towards new modular setup
module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `@jacco-meijer/content-models`,
  componentTypes: {
    articleSection: {},
    myNewComponent: {
      resolve: './dist/component-configs/components-map.js',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
  plugins: [
    {
      resolve: 'wheelroom-plugin-contentful',
      options: {
        initialPageSection: 'articleSection',
      },
    },
    {
      resolve: 'module:wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `@jacco-meijer/content-models`,
        templateSets: {
          fragments: [
            {
              fileName: '%componentFilename%.ts',
              resolve: '@jacco-meijer/content-models',
              template: 'fragmentTemplate',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          ],
          component: [
            {
              fileName: '%componentFilename%/%componentFilename%.ts',
              resolve: './templates/component-template',
              template: 'componentTemplate',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
            {
              fileName: '%componentFilename%/%componentFilename%-basic-var.ts',
              resolve: './templates/component-basic-var-template',
              template: 'componentBasicVarTemplate',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          ],
          config: [
            {
              fileName: '%componentFilename%/graphql.ts',
              resolve: './templates/graphql-template',
              template: 'graphqlTemplate',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          ],
        },
      },
    },
  ],
}
