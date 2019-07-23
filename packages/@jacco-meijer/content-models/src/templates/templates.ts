import { defaults } from './component-base/defaults'
import { sectionProps } from './component-base/section-props'
import { componentBasicVar } from './component/component-basic-var'
import { componentIndex } from './component/component-index'
import { componentNoVariations } from './component/component-no-variations'
import { componentReadme } from './component/component-readme'
import { componentVariations } from './component/component-variations'
import { configReadme } from './config/config-readme'
import { graphqlFragment } from './config/graphql-fragment'
import { graphqlFragmentQuery } from './config/graphql-fragment-query'
import { indexBlock } from './config/index-block'
import { indexSectionPart } from './config/index-section-part'
import { indexSubPageGlobal } from './config/index-sub-page-global'
import { modelNoVariation } from './config/model-no-variation'
import { modelVariation } from './config/model-variation'
import { fragment } from './fragments/fragment'

export const templates = {
  componentBasicVar,
  componentIndex,
  componentNoVariations,
  componentReadme,
  componentVariations,
  configReadme,
  defaults,
  fragment,
  graphqlFragment,
  graphqlFragmentQuery,
  indexBlock,
  indexSectionPart,
  indexSubPageGlobal,
  modelNoVariation,
  modelVariation,
  sectionProps,
}
