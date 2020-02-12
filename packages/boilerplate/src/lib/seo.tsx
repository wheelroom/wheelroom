import React from 'react'
import Helmet from 'react-helmet'

export interface AlternateLocale {
  href: string
  hrefLang: string
}

export interface SeoContentTypeInfo {
  type: 'article' | 'none'
  tags: SeoTags
}

export interface SeoTags {
  author?: string
  first_name?: string
  gender?: string
  last_name?: string
  modified_time?: string
  published_time?: string
  section?: string
  username?: string
  [tagName: string]: string | undefined
}

interface SeoProps {
  contentTypeInfo?: SeoContentTypeInfo
  description?: string
  imageSrc?: string
  keywords?: string[]
  locale: string
  alternateLocales?: AlternateLocale[]
  meta: any[]
  siteAuthor: string
  siteDescription: string
  siteKeywords: string[]
  siteHeading: string
  siteVersion: string
  title: string
}

export const Seo = (context: SeoProps) => {
  const metaDescription = context.description || context.siteDescription || ''
  const useKeywords = context.keywords || context.siteKeywords
  const metaKeywords = useKeywords.length > 0 ? useKeywords.join(', ') : ''
  const linkLocales = context.alternateLocales || []
  const typeTags = [
    {
      content: context.contentTypeInfo
        ? context.contentTypeInfo.type
        : 'website',
      property: 'og:type',
    },
  ]
  if (context.contentTypeInfo && context.contentTypeInfo.type === 'article') {
    Object.keys(context.contentTypeInfo.tags as object).forEach(tag => {
      typeTags.push({
        content: context.contentTypeInfo!.tags[tag],
        property: context.contentTypeInfo!.type + ':' + tag,
      } as any)
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
      title={context.title}
      titleTemplate={`%s | ${context.siteHeading}`}
      meta={[
        {
          content: context.siteVersion,
          name: 'site-version',
        },
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: metaKeywords,
          name: 'keywords',
        },

        ////////////////////////////////////////////////
        /// Open Graph
        {
          content: context.title,
          property: 'og:title',
        },
        {
          content: context.imageSrc,
          property: 'og:image',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: context.locale,
          property: 'og:locale',
        },

        ////////////////////////////////////////////////
        /// Twitter
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: context.siteAuthor,
          name: 'twitter:creator',
        },
        {
          content: context.title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
        {
          content: context.imageSrc,
          name: 'twitter:image',
        },
      ]
        .concat(context.meta)
        .concat(typeTags)}
    >
      {linkLocales.map((linkLocale: any) => (
        <link
          rel="alternate"
          href={linkLocale.href}
          hrefLang={linkLocale.hrefLang}
          key={linkLocale.hrefLang}
        />
      ))}
    </Helmet>
  )
}
