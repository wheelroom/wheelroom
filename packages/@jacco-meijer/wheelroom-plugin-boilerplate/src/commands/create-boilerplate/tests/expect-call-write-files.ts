export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: allFieldTypes\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { AllFieldTypesSingleVar } from './all-field-types-single-var'\n\nconst componentList = {\n  ['single']: AllFieldTypesSingleVar,\n}\n\nexport interface AllFieldTypesProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  dateField: string\n  dropdownField: string\n  imageField: FluidImage\n  longTextField: {\n    longTextField: string\n  }\n  multipleComponentsField: any\n  numberField: number\n  richTextField: {\n    richTextField: string\n  }\n  shortTextField: string\n  singleComponentField: any\n  tagsField: string[]\n  title: string\n}\n\nexport const AllFieldTypes = (props: AllFieldTypesProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'all-field-types/all-field-types.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: firstSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { FirstSectionSingleVar } from './first-section-single-var'\n\nconst componentList = {\n  ['single']: FirstSectionSingleVar,\n}\n\nexport interface FirstSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  defaultField: string\n  title: string\n}\n\nexport const FirstSection = (props: FirstSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'first-section/first-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: globalModel\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { GlobalModelSingleVar } from './global-model-single-var'\n\nconst componentList = {\n  ['single']: GlobalModelSingleVar,\n}\n\nexport interface GlobalModelProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const GlobalModel = (props: GlobalModelProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'global-model/global-model.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: noFragment\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { NoFragmentSingleVar } from './no-fragment-single-var'\n\nconst componentList = {\n  ['single']: NoFragmentSingleVar,\n}\n\nexport interface NoFragmentProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const NoFragment = (props: NoFragmentProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'no-fragment/no-fragment.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: pageModel\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { PageModelSingleVar } from './page-model-single-var'\n\nconst componentList = {\n  ['single']: PageModelSingleVar,\n}\n\nexport interface PageModelProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const PageModel = (props: PageModelProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'page-model/page-model.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: secondSection\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { SecondSectionSingleVar } from './second-section-single-var'\n\nconst componentList = {\n  ['single']: SecondSectionSingleVar,\n}\n\nexport interface SecondSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const SecondSection = (props: SecondSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'second-section/second-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: subPageModel\n *\n */\n\nimport { getVariation } from '@jacco-meijer/content-models'\nimport React from 'react'\nimport { SectionProps } from '../section-props'\nimport { FluidImage } from './src/views/image/image'\nimport { SubPageModelSingleVar } from './sub-page-model-single-var'\n\nconst componentList = {\n  ['single']: SubPageModelSingleVar,\n}\n\nexport interface SubPageModelProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const SubPageModel = (props: SubPageModelProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'sub-page-model/sub-page-model.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: allFieldTypes\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { AllFieldTypesProps } from './all-field-types'\n\nexport const AllFieldTypesSingleVar = (props: AllFieldTypesProps) => {\n  return (\n    <div>\n      <h2>AllFieldTypesSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'all-field-types/all-field-types-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: firstSection\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { FirstSectionProps } from './first-section'\n\nexport const FirstSectionSingleVar = (props: FirstSectionProps) => {\n  return (\n    <div>\n      <h2>FirstSectionSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'first-section/first-section-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: globalModel\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { GlobalModelProps } from './global-model'\n\nexport const GlobalModelSingleVar = (props: GlobalModelProps) => {\n  return (\n    <div>\n      <h2>GlobalModelSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'global-model/global-model-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: noFragment\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { NoFragmentProps } from './no-fragment'\n\nexport const NoFragmentSingleVar = (props: NoFragmentProps) => {\n  return (\n    <div>\n      <h2>NoFragmentSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'no-fragment/no-fragment-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: pageModel\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { PageModelProps } from './page-model'\n\nexport const PageModelSingleVar = (props: PageModelProps) => {\n  return (\n    <div>\n      <h2>PageModelSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'page-model/page-model-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: secondSection\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { SecondSectionProps } from './second-section'\n\nexport const SecondSectionSingleVar = (props: SecondSectionProps) => {\n  return (\n    <div>\n      <h2>SecondSectionSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'second-section/second-section-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: subPageModel\n * Variation: single\n *\n */\n\nimport React from 'react'\n\nimport { SubPageModelProps } from './sub-page-model'\n\nexport const SubPageModelSingleVar = (props: SubPageModelProps) => {\n  return (\n    <div>\n      <h2>SubPageModelSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'sub-page-model/sub-page-model-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: allFieldTypes\n *\n */\n\nexport * from './all-field-types'\n",
      relPath: 'all-field-types/index.ts',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component index\n *\n * Component type: firstSection\n *\n */\n\nexport * from './first-section'\n",
      relPath: 'first-section/index.ts',
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
        "/**\n * Component index\n *\n * Component type: noFragment\n *\n */\n\nexport * from './no-fragment'\n",
      relPath: 'no-fragment/index.ts',
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
        "/**\n * Component index\n *\n * Component type: secondSection\n *\n */\n\nexport * from './second-section'\n",
      relPath: 'second-section/index.ts',
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
        '# All field types\n\n```jsx\nimport { AllFieldTypes } from \'./all-field-types\'\n<AllFieldTypes __typename="value" dateField="value" dropdownField="item A" imageField="value" longTextField="This is a long text field" multipleComponentsField="value" numberField="value" richTextField="This is a rich text field" shortTextField="This is a short text field" singleComponentField="pageModel" tagsField="value" title="All field types generated from boilerplate" />\n```\n',
      relPath: 'all-field-types/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# First section\n\n```jsx\nimport { FirstSection } from \'./first-section\'\n<FirstSection __typename="value" defaultField="value" title="First section generated from boilerplate" />\n```\n',
      relPath: 'first-section/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# Global model\n\n```jsx\nimport { GlobalModel } from \'./global-model\'\n<GlobalModel __typename="value" heading="value" title="Global model generated from boilerplate" />\n```\n',
      relPath: 'global-model/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# No fragment\n\n```jsx\nimport { NoFragment } from \'./no-fragment\'\n<NoFragment __typename="value" heading="value" title="No fragment generated from boilerplate" />\n```\n',
      relPath: 'no-fragment/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# Page model\n\n```jsx\nimport { PageModel } from \'./page-model\'\n<PageModel __typename="value" heading="value" title="Page model generated from boilerplate" />\n```\n',
      relPath: 'page-model/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# Second section\n\n```jsx\nimport { SecondSection } from \'./second-section\'\n<SecondSection __typename="value" heading="value" title="Second section generated from boilerplate" />\n```\n',
      relPath: 'second-section/README.md',
    },
    {
      basePath: 'test-output',
      content:
        '# Sub page model\n\n```jsx\nimport { SubPageModel } from \'./sub-page-model\'\n<SubPageModel __typename="value" heading="value" title="Sub page model generated from boilerplate" />\n```\n',
      relPath: 'sub-page-model/README.md',
    },
  ],
  yes: true,
}
