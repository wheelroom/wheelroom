import { DeepPartial } from '@wheelroom/core'
import { DocsSectionDocsNcssTree } from '@wheelroom/wheel-doc'
import { containerNcssNode, wrapperNcssNode } from '../grid-ncss'
import { textSectionTextNcssTree } from '../text/text-ncss-tree'

export const docsSectionDocsNcssTree: DeepPartial<DocsSectionDocsNcssTree> = {
  container: containerNcssNode,
  docs: {
    ncss: {
      label: 'docs-section-docs',
      py: 5,
      w: 1,
    },
    breadcrumb: {
      ncss: {
        label: 'docs-breadcrumb',
        fontFamily: 'text',
        fontSize: 5,
        mb: 5,
      },
    },
    breadcrumbAction: {
      ncss: {
        label: 'docs-breadcrumb-action',
      },
    },
    breadcrumbCurrent: {
      ncss: {
        label: 'docs-breadcrumb-current',
        color: 'metal',
      },
    },
    breadcrumbSpacer: {
      ncss: {
        label: 'docs-breadcrumb-spacer',
        mx: 2,
        color: 'metal',
      },
    },
    header: {
      ncss: {
        label: 'docs-header',
        flexDirection: 'column',
        px: 3,
        maxWidth: '712px',
        mx: 'auto',
      },
    },
    heading: {
      ncss: {
        label: 'docs-heading',
        mb: 7,
      },
    },
    richText: textSectionTextNcssTree.richText,
  },
  wrapper: wrapperNcssNode,
}
