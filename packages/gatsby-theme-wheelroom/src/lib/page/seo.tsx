import * as React from 'react'
import Helmet from 'react-helmet'

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
}: any) => {
  const metaDescription = description || siteDescription
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
      })
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

SEO.defaultProps = {
  keywords: [],
  lang: 'en',
  meta: [],
}

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.array,
//   keywords: PropTypes.arrayOf(PropTypes.string),
//   title: PropTypes.string.isRequired,
// }

export default SEO
