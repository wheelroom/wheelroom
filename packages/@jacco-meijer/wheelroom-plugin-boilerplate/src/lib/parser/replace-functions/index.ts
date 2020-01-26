import { componentHtmlAttributesFunc } from './component-html-attributes/component-html-attributes'
import { reactPropsFunc } from './react-props/react-props'
import { tsModelTypesFunc } from './ts-model-types/ts-model-types'
import { tsModelsFunc } from './ts-models/ts-models'
import { variationImportListFunc } from './variation-import-list/variation-import-list'
import { variationListFunc } from './variation-list/variation-list'
import { variationFunc } from './variation/variation'

export const replaceFunctions = [
  ...componentHtmlAttributesFunc,
  ...reactPropsFunc,
  ...tsModelsFunc,
  ...tsModelTypesFunc,
  ...variationFunc,
  ...variationImportListFunc,
  ...variationListFunc,
]
