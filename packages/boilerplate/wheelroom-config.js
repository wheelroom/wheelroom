path = require('path')

// WIP Working towards new modular setup
module.exports = {
  defaultComponentResolve: `@jacco-meijer/content-models`,
  components: {
    article: {},
    articleSection: {
      options: {
        variations: ['var 1', 'var 2'],
        overwriteVariations: true,
      },
    },
    globals: {
      resolve: '@jacco-meijer/content-models',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
      options: {
        initialPageSection: 'articleSection',
      },
    },
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultLocale: 'nl',
        defaultTemplateResolve: `dist/packages:templates`,
        templateSets: {
          fragments: {
            fragmentTemplate: {
              fileName: '%componentFilename%.ts',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
          component: {
            component: {
              fileName: '%componentFilename%/%componentFilename%.ts',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
            componentBasicVar: {
              fileName: '%componentFilename%/%componentFilename%-basic-var.ts',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
          config: {
            graphql: {
              fileName: '%componentFilename%/graphql.ts',
              resolve: 'dist/packages:templates',
              wheelroomTypes: ['subPage', 'section', 'global', 'part'],
            },
          },
        },
      },
    },
  ],
}
