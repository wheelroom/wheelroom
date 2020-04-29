import React from 'react'
import { Helmet } from 'react-helmet'

export interface AlternateLocale {
  href: string
  hrefLang: string
}

export interface SeoProps {
  alternateLocales?: AlternateLocale[]
  imageSrc?: string
  keywords?: string[]
  locale: string
  meta: any[]
  pageDescription?: string
  pageHeading: string
  siteAuthor: string
  siteDescription: string
  siteHeading: string
  siteKeywords: string[]
  siteVersion: string
}

export const Seo = (context: SeoProps) => {
  const metaDescription =
    context.pageDescription || context.siteDescription || ''
  const metaHeading = context.pageHeading || context.siteHeading || ''
  const useKeywords = context.keywords || context.siteKeywords
  const metaKeywords = useKeywords.length > 0 ? useKeywords.join(', ') : ''
  const linkLocales = context.alternateLocales || []

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
      title={metaHeading}
      titleTemplate={`%s | ${metaHeading}`}
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
          content: metaHeading,
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
          content: metaHeading,
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
      ].concat(context.meta)}
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
