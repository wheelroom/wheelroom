import updater from '../../version-updater'

const rootPackage = {
  filename: '../../package.json',
  updater,
}

const anyPackage = {
  filename: './package.json',
  updater,
}

export const bumpFiles = [anyPackage, rootPackage]
export const packageFiles = [rootPackage]
