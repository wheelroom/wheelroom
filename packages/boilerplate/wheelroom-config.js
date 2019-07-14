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
        defaultTemplateResolve: `dist:templates`,
        templateSets: [
          {
            name: 'fragments',
            loopComponents: true,
            templates: {
              fragmentTemplate: {
                path: '%componentFilename%.ts',
                options: { filter: ['subPage', 'section', 'global', 'part'] },
              },
            },
          },
          {
            name: 'component',
            questions: 'newModel',
            templates: {
              component: {
                path: '%componentFilename%/%componentFilename%.ts',
                options: { filter: ['subPage', 'section', 'global', 'part'] },
              },
              componentBasicVar: {
                path: '%componentFilename%/%componentFilename%-basic-var.ts',
                options: { filter: ['subPage', 'section', 'global', 'part'] },
              },
            },
          },
          {
            name: 'config',
            questions: 'newModel',
            templates: {
              configReadmeTemplate: {
                path: '%componentFilename%/README.md',
                resolve: 'dist:templates',
                options: { filter: ['subPage', 'section', 'global', 'part'] },
              },
            },
          },
        ],
        questionSets: {
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
    },
  ],
}
