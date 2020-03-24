export type NcssProps = any
export type ListElementName = 'ul' | 'ol' | 'li'
export type InlineElementName =
  | 'a'
  | 'abbr'
  | 'acronym'
  | 'b'
  | 'bdo'
  | 'big'
  | 'br'
  | 'button'
  | 'cite'
  | 'code'
  | 'dfn'
  | 'em'
  | 'i'
  | 'img'
  | 'input'
  | 'kbd'
  | 'label'
  | 'map'
  | 'object'
  | 'output'
  | 'q'
  | 'samp'
  | 'script'
  | 'select'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub'
  | 'sup'
  | 'textarea'
  | 'time'
  | 'tt'
  | 'var'

export type BlockLevelElementName =
  | 'address'
  | 'article'
  | 'aside'
  | 'blockquote'
  | 'canvas'
  | 'dd'
  | 'div'
  | 'dl'
  | 'dt'
  | 'fieldset'
  | 'figcaption'
  | 'figure'
  | 'footer'
  | 'form'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'header'
  | 'hr'
  | 'li'
  | 'main'
  | 'nav'
  | 'noscript'
  | 'ol'
  | 'p'
  | 'pre'
  | 'section'
  | 'table'
  | 'tfoot'
  | 'ul'
  | 'video'

export type LinkRelationshipAttribute =
  | 'alternate'
  | 'author'
  | 'bookmark'
  | 'external'
  | 'help'
  | 'license'
  | 'next'
  | 'nofollow'
  | 'noreferrer'
  | 'noopener'
  | 'prev'
  | 'search'
  | 'tag'

export interface FluidImageObject {
  description: string
  fluid: {
    sizes: string
    src: string
    srcSet: string
  }
  title: string
}

export interface VideoAttributes {
  description: string
  url: string
  title: string
  type: string
}

export type styleProp = string | string[] | number | number[]
