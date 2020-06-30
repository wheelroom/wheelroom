import React from 'react'
import { Helmet } from 'react-helmet'
import { SeoProps } from './seo-props'

export interface AlternateLocale {
  href: string
  hrefLang: string
}

type MetaString = string | undefined
type MetaArray = string[] | undefined

const getLastStringValue = (strings: MetaString[] | undefined): MetaString => {
  if (!strings) {
    return ''
  }
  return strings
    .reverse()
    .find(
      (aString: MetaString) => typeof aString === 'string' && aString.length > 0
    )
}

const getFirstStringValue = (strings: MetaString[] | undefined): MetaString => {
  if (!strings) {
    return ''
  }
  return strings.find(
    (aString: MetaString) => typeof aString === 'string' && aString.length > 0
  )
}

const getFirstArrayValue = (arrays: MetaArray[] | undefined): MetaArray => {
  if (!Array.isArray(arrays)) {
    return []
  }
  return arrays.find(
    (anArray: MetaArray) => Array.isArray(anArray) && anArray.length > 0
  )
}

export const Seo = (context: SeoProps) => {
  const author = getFirstStringValue(context.authorArray) || ''
  const imageSrc = getFirstStringValue(context.imageSrcArray) || ''
  const keywordsArray = getFirstArrayValue(context.keywordsArray) || []
  const metaDescription = getFirstStringValue(context.descriptionArray) || ''
  const metaHeading = getFirstStringValue(context.headingArray) || ''

  const metaKeywords = keywordsArray.length > 0 ? keywordsArray.join(', ') : ''
  const linkLocales = context.alternateLocales || []

  let titleTemplate = '%s'
  if (Array.isArray(context.headingArray) && context.headingArray.length > 1) {
    const lastValue = getLastStringValue(context.headingArray)
    if (metaHeading !== lastValue) {
      titleTemplate = `%s | ${lastValue}`
    }
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: context.locale,
      }}
      titleTemplate={titleTemplate}
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
          content: imageSrc,
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
          content: author,
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
          content: imageSrc,
          name: 'twitter:image',
        },
      ].concat(context.meta)}
    >
      <title>{metaHeading}</title>
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
