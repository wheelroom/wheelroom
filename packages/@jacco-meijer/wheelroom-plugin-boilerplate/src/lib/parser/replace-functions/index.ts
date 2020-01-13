import { componentHtmlAttributesFunc } from './component-html-attributes/component-html-attributes'
import { reactPropsFunc } from './react-props/react-props'
import { variationImportListFunc } from './variation-import-list/variation-import-list'
import { variationListFunc } from './variation-list/variation-list'
import { variationFunc } from './variation/variation'

export const replaceFunctions = [
  ...componentHtmlAttributesFunc,
  ...reactPropsFunc,
  ...variationFunc,
  ...variationImportListFunc,
  ...variationListFunc,
]
