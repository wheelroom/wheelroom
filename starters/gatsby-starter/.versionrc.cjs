import updater from '../../version-updater'

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const gatsbyStarterPackage = {
  filename: './package.json',
  updater,
}

export const bumpFiles = [rootPackage, gatsbyStarterPackage]
export const packageFiles = [rootPackage]
