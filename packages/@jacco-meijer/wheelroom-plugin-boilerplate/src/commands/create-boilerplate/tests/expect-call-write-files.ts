export const expectCallWriteFiles = {
  dryRun: true,
  fileList: [
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: firstSection\n *\n */\n\nimport React from 'react'\nimport { getVariation } from '../../lib/get-variation'\nimport { FluidImage } from '../../views/image/image'\nimport { SectionProps } from '../../sections/section-props'\nimport { FirstSectionLargeItemsVar } from './first-section-large-items-var'\nimport { FirstSectionSmallItemsVar } from './first-section-small-items-var'\n\nconst componentList = {\n  ['large items']: FirstSectionLargeItemsVar,\n  ['small items']: FirstSectionSmallItemsVar,\n}\n\nexport interface FirstSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  defaultField: string\n  title: string\n  variation: string\n}\n\nexport const FirstSection = (props: FirstSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'first-section/first-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: noFragment\n *\n */\n\nimport React from 'react'\nimport { getVariation } from '../../lib/get-variation'\nimport { FluidImage } from '../../views/image/image'\nimport { SectionProps } from '../../sections/section-props'\nimport { NoFragmentSingleVar } from './no-fragment-single-var'\n\nconst componentList = {\n  ['single']: NoFragmentSingleVar,\n}\n\nexport interface NoFragmentProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const NoFragment = (props: NoFragmentProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'no-fragment/no-fragment.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component\n *\n * Component type: secondSection\n *\n */\n\nimport React from 'react'\nimport { getVariation } from '../../lib/get-variation'\nimport { FluidImage } from '../../views/image/image'\nimport { SectionProps } from '../../sections/section-props'\nimport { SecondSectionSingleVar } from './second-section-single-var'\n\nconst componentList = {\n  ['single']: SecondSectionSingleVar,\n}\n\nexport interface SecondSectionProps extends SectionProps {\n  /** Gatsby fetched data */\n  __typename: string\n  heading: string\n  title: string\n}\n\nexport const SecondSection = (props: SecondSectionProps) => {\n  const Variation = getVariation(props, componentList)\n\n  return <Variation {...props} />\n}\n",
      relPath: 'second-section/second-section.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: firstSection\n * Variation: Large items\n *\n */\n\nimport React from 'react'\n\nimport { FirstSectionProps } from './first-section'\n\nexport const FirstSectionLargeItemsVar = (props: FirstSectionProps) => {\n  return (\n    <div>\n      <h2>FirstSectionLargeItemsVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'first-section/first-section-large-items-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: firstSection\n * Variation: Small items\n *\n */\n\nimport React from 'react'\n\nimport { FirstSectionProps } from './first-section'\n\nexport const FirstSectionSmallItemsVar = (props: FirstSectionProps) => {\n  return (\n    <div>\n      <h2>FirstSectionSmallItemsVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'first-section/first-section-small-items-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: noFragment\n * Variation: Single\n *\n */\n\nimport React from 'react'\n\nimport { NoFragmentProps } from './no-fragment'\n\nexport const NoFragmentSingleVar = (props: NoFragmentProps) => {\n  return (\n    <div>\n      <h2>NoFragmentSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'no-fragment/no-fragment-single-var.tsx',
    },
    {
      basePath: 'test-output',
      content:
        "/**\n * Component variation\n *\n * Component type: secondSection\n * Variation: Single\n *\n */\n\nimport React from 'react'\n\nimport { SecondSectionProps } from './second-section'\n\nexport const SecondSectionSingleVar = (props: SecondSectionProps) => {\n  return (\n    <div>\n      <h2>SecondSectionSingleVar</h2>\n      <p>Hello world</p>\n    </div>\n  )\n}\n",
      relPath: 'second-section/second-section-single-var.tsx',
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
        "/**\n * Component index\n *\n * Component type: noFragment\n *\n */\n\nexport * from './no-fragment'\n",
      relPath: 'no-fragment/index.ts',
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
    {
      basePath: 'test-output',
      content:
        '# First section\n\n```jsx\nimport { FirstSection } from \'./first-section\'\n<FirstSection __typename="value" defaultField="value" title="First section generated from boilerplate" variation="large items" />\n```\n',
      relPath: 'first-section/README.md',
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
        '# Second section\n\n```jsx\nimport { SecondSection } from \'./second-section\'\n<SecondSection __typename="value" heading="value" title="Second section generated from boilerplate" />\n```\n',
      relPath: 'second-section/README.md',
    },
  ],
  yes: true,
}
