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
        templateSets: [
          {
            name: 'fragments',
            templates: {
              fragment: {
                path: '%componentFilename%.ts',
                typeFilter: ['subPage', 'section', 'global', 'part'],
              },
            },
          },
          {
            name: 'component',
            questions: 'newModel',
            templates: {
              component: {
                path: '%componentFilename%/%componentFilename%.ts',
                typeFilter: ['subPage', 'section', 'global', 'part'],
              },
              componentBasicVar: {
                path: '%componentFilename%/%componentFilename%-basic-var.ts',
                typeFilter: ['subPage', 'section', 'global', 'part'],
              },
            },
          },
          {
            name: 'config',
            questions: 'newModel',
            templates: {
              graphql: {
                path: '%componentFilename%/graphql.ts',
                resolve: 'dist/packages:templates',
                typeFilter: ['subPage', 'section', 'global', 'part'],
              },
            },
          },
        ],
      },
      questions: {
        newModel: [
          {
            default: 'My new component',
            message: 'What is the name of the component?',
            name: 'componentName',
            type: 'input',
          },
          {
            choices: ['section', 'part', 'block', 'subPage', 'global'],
            message: `
          
      Section: A section is a part of a page and has no query
      Part:    A part is part of a section and has no query
      Block:   A part of a richText field, has no fragment or query
      SubPage: defines fields and a query, if the slug field matches, the page is fetched
      Global:  defines fields and a query, always fetched and added to every page
      
      What is the component wheelroom type?`,
            name: 'wheelroomType',
            type: 'rawlist',
          },
          {
            default: 'author, bodyText, heading',
            message: `
      
      This will setup required Symbol fields. Title and variation fields are always created.
      
      What fields would you like to setup?`,
            name: 'componentFields',
            type: 'input',
          },
          {
            default: false,
            message: 'Do you need localized fields?',
            name: 'localizedFields',
            type: 'confirm',
          },
        ],
      },
    },
  ],
}
