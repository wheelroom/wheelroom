import { DeepPartial } from '@wheelroom/core'
import { customNcssTree } from '../custom/custom-ncss-tree'
import { CustomSectionNcssTree } from '../../../../../custom-wheel/models/custom-section/ncss-tree'
import { containerNcssNode, wrapperNcssNode } from '../../grid-ncss'

export const customSectionSmallNcssTree: DeepPartial<CustomSectionNcssTree> = {
  container: containerNcssNode,
  section: customNcssTree,
  wrapper: wrapperNcssNode,
}
