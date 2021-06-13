import { ArboristPackage } from '../../lib/arborist'

const packageOrder = [
  '_id',
  'name',
  'version',
  'description',
  'license',
  'keywords',
  'author',
  'contributors',
  'main',
  'homepage',
  'repository',
  'bugs',
  'private',
  'publishConfig',
  'workspaces',
  'scripts',
  'dependencies',
  'devDependencies',
  'engines',
  'browserslist',
]

const packageOrderFn = (a: string, b: string) => {
  let posA = packageOrder.indexOf(a)
  let posB = packageOrder.indexOf(b)
  posA = posA === -1 ? 999 : posA
  posB = posB === -1 ? 999 : posB
  return posA - posB
}

interface SortObject {
  packageObject?: ArboristPackage
  compareFn?: (a: string, b: string) => number
}

const sortObject = ({ packageObject, compareFn }: SortObject) => {
  const result = Object.keys(packageObject)
    .sort(compareFn)
    .reduce((result, key) => {
      result[key] = packageObject[key]
      return result
    }, {})
  return result
}

interface SortPackage {
  packageObject?: ArboristPackage
}

export const sortPackage = ({ packageObject }: SortPackage) => {
  // Sort main object
  const mainSorted = sortObject({
    packageObject,
    compareFn: packageOrderFn,
  })

  // Sort sub objects
  const subsSorted = Object.keys(mainSorted).reduce((result, key) => {
    if (Array.isArray(mainSorted[key])) {
      result[key] = mainSorted[key].sort()
    } else if (typeof mainSorted[key] === 'object') {
      result[key] = sortObject({ packageObject: mainSorted[key] })
    } else {
      result[key] = mainSorted[key]
    }
    return result
  }, {})

  return subsSorted
}
