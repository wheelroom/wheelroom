import { NamedPaths } from './types/named-paths'

// Check for slug, if found, replace any %variable% with it
export const getNamedPath = ({
  locale,
  namedPaths,
  pathName,
  slug,
}: {
  locale: string
  namedPaths: NamedPaths
  pathName: string
  slug: string
}) => {
  const path = namedPaths[pathName][locale]
  if (slug) {
    const tokens = path.split('%')
    tokens.splice(1, 1)
    tokens.push(slug)
    return tokens.join('')
  }
  return normalizedPath(path)
}

// Make sure all internal paths have a trailing slash. This prevents Netlify
// generating 301 redirects. Because of URL normalization which in turn is
// because of CDN performance.
//
// See: https://www.netlify.com/docs/redirects/#trailing-slash
export const normalizedPath = (path: string) => {
  // If it is not an internal path, do nothing
  if (path.charAt(0) !== '/') {
    return path
  }
  // This is an internal path and must have a trailing slash
  if (path.slice(-1) !== '/') {
    return path + '/'
  }
  // This is a perfect internal path, return unchanged
  return path
}
