export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: allFieldTypes\n *\n */\n\nexport * from './all-field-types'\n",
      relPath: 'all-field-types/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: globalModel\n *\n */\n\nexport * from './global-model'\n",
      relPath: 'global-model/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: pageModel\n *\n */\n\nexport * from './page-model'\n",
      relPath: 'page-model/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: subPageModel\n *\n */\n\nexport * from './sub-page-model'\n",
      relPath: 'sub-page-model/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component interface only\n *\n * Component type: allFieldTypes\n *\n */\n\nimport { FluidImage } from '../../views/image/image'\n\nexport interface AllFieldTypesProps {\n  /** Gatsby fetched data */\n  __typename: string\n  dateField: string\n  dropdownField: string\n  imageField: FluidImage\n  longTextField: {\n    longTextField: string\n  }\n  multipleComponentsField: any\n  numberField: number\n  richTextField: {\n    richTextField: string\n  }\n  shortTextField: string\n  singleComponentField: any\n  tagsField: string[]\n  title: string\n}\n",
      relPath: 'all-field-types/all-field-types.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component interface only\n *\n * Component type: globalModel\n *\n */\n\nimport { FluidImage } from '../../views/image/image'\n\nexport interface GlobalModelProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n",
      relPath: 'global-model/global-model.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component interface only\n *\n * Component type: pageModel\n *\n */\n\nimport { FluidImage } from '../../views/image/image'\n\nexport interface PageModelProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n",
      relPath: 'page-model/page-model.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component interface only\n *\n * Component type: subPageModel\n *\n */\n\nimport { FluidImage } from '../../views/image/image'\n\nexport interface SubPageModelProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n",
      relPath: 'sub-page-model/sub-page-model.tsx',
    },
  ],
  yes: true,
}
