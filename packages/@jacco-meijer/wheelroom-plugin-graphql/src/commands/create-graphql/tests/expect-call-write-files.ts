export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: allFieldTypes\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment AllFieldTypes on ContentfulAllFieldTypes {\n  __typename\n  dateField\n  dropdownField\n  imageField {\n    title\n    description\n    fluid(maxWidth: 1024) {\n      sizes\n      src\n      srcSet\n    }\n  }\n  longTextField {\n    longTextField\n  }\n  multipleComponentsField {\n    ... on Node {\n      ...Page\n      ...FirstSection\n      ...SecondSection\n    }\n  }\n  numberField\n  richTextField {\n    richTextField\n  }\n  shortTextField\n  singleComponentField {\n    ... on Node {\n      ...Page\n    }\n  }\n  tagsField\n  title\n}\n`\n",
      relPath: 'all-field-types/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: firstSection\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment FirstSection on ContentfulFirstSection {\n  __typename\n  defaultField\n  title\n}\n`\n",
      relPath: 'first-section/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: globalModel\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment GlobalModel on ContentfulGlobalModel {\n  __typename\n  heading\n  title\n}\n`\n",
      relPath: 'global-model/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: pageModel\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment PageModel on ContentfulPageModel {\n  __typename\n  heading\n  title\n}\n`\n",
      relPath: 'page-model/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: secondSection\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment SecondSection on ContentfulSecondSection {\n  __typename\n  heading\n  title\n}\n`\n",
      relPath: 'second-section/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql fragment definition\n *\n * These fragments define the component fields. Gatsby resolves this file\n * by scanning the src folder, then adds the fragments to the main page query.\n *\n *\n * Component: subPageModel\n */\n\nimport { graphql } from 'gatsby'\n\nexport const fragment = graphql`\nfragment SubPageModel on ContentfulSubPageModel {\n  __typename\n  heading\n  title\n}\n`\n",
      relPath: 'sub-page-model/fragment.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql query definition\n *\n * Query type: subPage\n * Component: allFieldTypes\n *\n */\n\n\nmodule.exports = {\n  componentName: 'allFieldTypes',\n  query: `\n  {\n    allFieldTypes: allContentfulAllFieldTypes(queryLimit: 10) {\n      edges {\n        node {\n          id\n          node_locale\n          slug\n        }\n      }\n    }\n  }\n`,\n  type: 'subPage',\n}\n",
      relPath: 'all-field-types/query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql query definition\n *\n * Query type: global\n * Component: globalModel\n *\n */\n\n\nmodule.exports = {\n  componentName: 'globalModel',\n  query: `\n  {\n    globalModel: allContentfulGlobalModel(queryLimit: 10) {\n      edges {\n        node {\n          id\n          node_locale\n        }\n      }\n    }\n  }\n`,\n  type: 'global',\n}\n",
      relPath: 'global-model/query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql query definition\n *\n * Query type: page\n * Component: pageModel\n *\n */\n\n\nmodule.exports = {\n  componentName: 'pageModel',\n  query: `\n  {\n    pageModel: allContentfulPageModel(queryLimit: 10) {\n      edges {\n        node {\n          id\n          node_locale\n          path\n          pathName\n        }\n      }\n    }\n  }\n`,\n  type: 'page',\n}\n",
      relPath: 'page-model/query.js',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Graphql query definition\n *\n * Query type: subPage\n * Component: subPageModel\n *\n */\n\n\nmodule.exports = {\n  componentName: 'subPageModel',\n  query: `\n  {\n    subPageModel: allContentfulSubPageModel(queryLimit: 10) {\n      edges {\n        node {\n          id\n          node_locale\n          slug\n        }\n      }\n    }\n  }\n`,\n  type: 'subPage',\n}\n",
      relPath: 'sub-page-model/query.js',
    },
  ],
  yes: true,
}
