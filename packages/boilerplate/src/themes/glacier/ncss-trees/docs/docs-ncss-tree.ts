import { DeepPartial } from '@wheelroom/core'
import { DocsSectionDocsNcssTree } from '@wheelroom/wheel-doc'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { textSectionTextNcssTree } from '../text/text-ncss-tree'

export const docsSectionDocsNcssTree: DeepPartial<DocsSectionDocsNcssTree> = {
  container: containerNcssNode,
  docs: {
    ncss: {
      label: 'docs-section-docs',
      w: 1,
    },
    header: {
      ncss: {
        label: 'docs-header',
        flexDirection: 'column',
        px: 3,
        py: 5,
        maxWidth: '712px',
        mx: 'auto',
      },
    },
    heading: {
      ncss: {
        label: 'docs-heading',
        mt: 3,
      },
    },
    richText: textSectionTextNcssTree.richText,
  },
  wrapper: wrapperNcssNode,
}
