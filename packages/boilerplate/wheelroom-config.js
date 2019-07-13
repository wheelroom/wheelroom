path = require('path')

// WIP Working towards new modular setup
module.exports = {
  defaultComponentResolve: `@jacco-meijer/content-models`,
  components: {
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
        initialPageSection: 'articleSection',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultLocale: 'nl',
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
