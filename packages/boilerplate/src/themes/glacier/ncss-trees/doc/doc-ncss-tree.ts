import { DeepPartial } from '@wheelroom/core'
import { DocSectionDocNcssTree } from '@wheelroom/wheel-doc'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { textSectionTextNcssTree } from '../text/text-ncss-tree'

export const docSectionDocNcssTree: DeepPartial<DocSectionDocNcssTree> = {
  container: containerNcssNode,
  doc: {
    ncss: {
      label: 'doc-section-doc',
      w: 1,
    },
    header: {
      ncss: {
        label: 'doc-header',
        flexDirection: 'column',
        px: 3,
        py: 5,
        maxWidth: '712px',
        mx: 'auto',
      },
    },
    heading: {
      ncss: {
        label: 'doc-heading',
        mt: 3,
      },
    },
    richText: textSectionTextNcssTree.richText,
  },
  wrapper: wrapperNcssNode,
}
