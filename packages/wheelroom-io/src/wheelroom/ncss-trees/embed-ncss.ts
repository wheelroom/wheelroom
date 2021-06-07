import { NcssNode } from '@wheelroom/core'

export const htmlEmbedNcssNode: NcssNode = {
  ncss: {
    position: 'relative',
    h: '0px',
    pb: '56.25%',
    iframe: {
      position: 'absolute',
      h: 1,
      w: 1,
    },
  },
}

export const youtubeEmbedNcssNode: NcssNode = {
  ncss: {
    position: 'relative',
    h: '0px',
    pb: '56.25%',
    iframe: {
      position: 'absolute',
      h: 1,
      w: 1,
    },
  },
}

export const embedNcssNode = {
  html: htmlEmbedNcssNode,
  youtube: youtubeEmbedNcssNode,
}
