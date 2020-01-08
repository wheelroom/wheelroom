export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: allFieldTypes\n*/\n\nexport const fragment = `\nfragment AllFieldTypes on ContentfulAllFieldTypes {\n  __typename\n  dateField\n  dropdownField\n  imageField {\n    title\n    description\n    fluid(maxWidth: 1024) {\n      sizes\n      src\n      srcSet\n    }\n  }\n  longTextField {\n    longTextField\n  }\n  multipleComponentsField {\n    ... on Node {\n      ...Page\n      ...FirstSection\n      ...SecondSection\n    }\n  }\n  numberField\n  richTextField {\n    richTextField\n  }\n  shortTextField\n  singleComponentField {\n    ... on Node {\n      ...Page\n    }\n  }\n  tagsField\n  title\n}\n`',
      relPath: 'all-field-types-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: firstSection\n*/\n\nexport const fragment = `\nfragment FirstSection on ContentfulFirstSection {\n  __typename\n  defaultField\n  title\n}\n`',
      relPath: 'first-section-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: globalModel\n*/\n\nexport const fragment = `\nfragment GlobalModel on ContentfulGlobalModel {\n  __typename\n  heading\n  title\n}\n`',
      relPath: 'global-model-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: pageModel\n*/\n\nexport const fragment = `\nfragment PageModel on ContentfulPageModel {\n  __typename\n  heading\n  title\n}\n`',
      relPath: 'page-model-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: secondSection\n*/\n\nexport const fragment = `\nfragment SecondSection on ContentfulSecondSection {\n  __typename\n  heading\n  title\n}\n`',
      relPath: 'second-section-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        '/**\n* Graphql fragment definition\n*\n* Component: subPageModel\n*/\n\nexport const fragment = `\nfragment SubPageModel on ContentfulSubPageModel {\n  __typename\n  heading\n  title\n}\n`',
      relPath: 'sub-page-model-fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: %createPageQuery%\n* Component: allFieldTypes\n*\n*/\n\nexport const componentName = 'allFieldTypes'\nexport const type = '%createPageQuery%'\nexport const query = `\n{\n  allFieldTypes: allContentfulAllFieldTypes(limit: 10) {\n    edges {\n      node {\n        id\n        node_locale\n        slug\n      }\n    }\n  }\n}\n`",
      relPath: 'all-field-types-query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: %createPageQuery%\n* Component: globalModel\n*\n*/\n\nexport const componentName = 'globalModel'\nexport const type = '%createPageQuery%'\nexport const query = `\n{\n  globalModel: allContentfulGlobalModel(limit: 10) {\n    edges {\n      node {\n        id\n        node_locale\n      }\n    }\n  }\n}\n`",
      relPath: 'global-model-query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: %createPageQuery%\n* Component: pageModel\n*\n*/\n\nexport const componentName = 'pageModel'\nexport const type = '%createPageQuery%'\nexport const query = `\n{\n  pageModel: allContentfulPageModel(limit: 10) {\n    edges {\n      node {\n        id\n        node_locale\n        path\n        pathName\n      }\n    }\n  }\n}\n`",
      relPath: 'page-model-query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n* Graphql query definition\n*\n* Query type: %createPageQuery%\n* Component: subPageModel\n*\n*/\n\nexport const componentName = 'subPageModel'\nexport const type = '%createPageQuery%'\nexport const query = `\n{\n  subPageModel: allContentfulSubPageModel(limit: 10) {\n    edges {\n      node {\n        id\n        node_locale\n        slug\n      }\n    }\n  }\n}\n`",
      relPath: 'sub-page-model-query.js',
    },
  ],
  yes: true,
}
