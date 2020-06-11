/**
 * Component interface only
 *
 * Component type: blog
 *
 */

import { BlogWheelStyle } from '../../wheels/section/blog/presets/blog-section-preset'
import { Wheel } from '../../types/wheel'
import { MediaObject } from '../../elements/types/media'
import { TopicProps } from '../topic/topic'

export interface BlogProps {
  /** Gatsby fetched data */
  __typename: string
  heading?: string
  abstract?: {
    abstract: string
  }
  media?: MediaObject
  icon?: string
  slug: string
  date: string
  text: {
    json: string
  }
  categories?: string[]
  authors?: TopicProps[]
  seoTitle?: string
  seoDescription?: string
  seoImage?: MediaObject
  seoKeywords?: string[]
}

export interface BlogNodeProps {
  node: BlogProps
}

export interface AllBlogProps {
  edges: BlogNodeProps[]
}

export interface BlogWheel extends Wheel {
  style: BlogWheelStyle
}

export interface BlogWheelProps {
  /** Styling wheel */
  wheel: BlogWheel
  /** Locale needed for rich text render */
  locale: string
  /** Blog props to render */
  blog: BlogProps
  /** Use a max width or fluid container */
  containerStyle: 'container' | 'fluid'
  /** Accept max number of topics, ignore all others */
  maxTopics?: number
}
