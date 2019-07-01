import * as React from 'react'
import Helmet from 'react-helmet'
import { SeoProps } from '../../../types/seo'

export const Seo = ({
  contentTypeInfo,
  description,
  image,
  keywords,
  locale,
  locales,
  meta,
  siteAuthor,
  siteDescription,
  siteKeywords,
  siteTitle,
  siteVersion,
  title,
}: SeoProps) => {
  const metaDescription = description || siteDescription || ''
  const useKeywords = keywords || siteKeywords
  const metaKeywords = useKeywords.length > 0 ? useKeywords.join(', ') : ''
  const linkLocales = locales || []
  const typeTags = [
    {
      content: contentTypeInfo ? contentTypeInfo.type : 'website',
      property: 'og:type',
    },
  ]
  if (contentTypeInfo) {
    Object.keys(contentTypeInfo.tags).forEach(tag => {
      typeTags.push({
        content: contentTypeInfo.tags[tag],
        property: contentTypeInfo.type + ':' + tag,
      } as any)
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: locale,
      }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          content: siteVersion,
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
          content: title,
          property: 'og:title',
        },
        {
          content: image,
          property: 'og:image',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: locale,
          property: 'og:locale',
        },

        ////////////////////////////////////////////////
        /// Twitter
        {
          content: 'summary',
          name: 'twitter:card',
        },
        {
          content: siteAuthor,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
        {
          content: image,
          name: 'twitter:image',
        },
      ]
        .concat(meta)
        .concat(typeTags)}
    >
      {linkLocales.map((linkLocale: any) => (
        <link
          rel="alternate"
          href={linkLocale.href}
          hrefLang={linkLocale.name}
          key={linkLocale.name}
        />
      ))}
    </Helmet>
  )
}
