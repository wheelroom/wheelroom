import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

const SEO = ({
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
}) => {
  const metaDescription = description || siteDescription
  const useKeywords = keywords || siteKeywords
  const metaKeywords = useKeywords.length > 0 ? useKeywords.join(', ') : ''
  const linkLocales = locales || []
  const typeTags = [
    {
      property: 'og:type',
      content: contentTypeInfo ? contentTypeInfo.type : 'website',
    },
  ]
  if (contentTypeInfo) {
    for (const tag in contentTypeInfo.tags) {
      typeTags.push({
        property: contentTypeInfo.type + ':' + tag,
        content: contentTypeInfo.tags[tag],
      })
    }
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
          name: 'site-version',
          content: siteVersion,
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: metaKeywords,
        },

        ////////////////////////////////////////////////
        /// Open Graph
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:locale',
          content: locale,
        },

        ////////////////////////////////////////////////
        /// Twitter
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteAuthor,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ]
        .concat(meta)
        .concat(typeTags)}
    >
      {linkLocales.map(locale => (
        <link
          rel="alternate"
          href={locale.href}
          hrefLang={locale.name}
          key={locale.name}
        />
      ))}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
