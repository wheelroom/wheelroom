export const buildNamedPaths = (queries: any, defaultLocale: string) => {
  const namedPaths: any = {}
  console.log(`Building named paths`)
  queries.page.page.forEach((edge: any) => {
    const page = edge.node
    if (!(page.pathName in namedPaths)) {
      namedPaths[page.pathName] = { path: '' }
    }
    namedPaths[page.pathName].path = page.path
    const locale = page.node_locale
    const localizedBasePath =
      locale === defaultLocale ? page.path : '/' + locale + page.path

    // Strip trailing slashes
    namedPaths[page.pathName][locale] = localizedBasePath
      .toLowerCase()
      .replace(/(.)\/$/, '$1')
  })
  return namedPaths
}
