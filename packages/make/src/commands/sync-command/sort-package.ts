import { ArboristPackage } from '../../lib/arborist'

const packageOrder = [
  '_id',
  'name',
  'version',
  'private',
  'description',
  'keywords',
  'homepage',
  'bugs',
  'repository',
  'license',
  'author',
  'contributors',
  'exports',
  'typesVersions',
  'main',
  'files',
  'bin',
  'publishConfig',
  'workspaces',
  'scripts',
  'dependencies',
  'devDependencies',
  'peerDependencies',
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
  obj: Record<string, any>
  compareFn?: (a: string, b: string) => number
}

const sortObject = ({ obj, compareFn }: SortObject): Record<string, any> => {
  const result = Object.keys(obj)
    .sort(compareFn)
    .reduce((result, key) => {
      result[key] = obj[key]
      return result
    }, <Record<string, any>>{})
  return result
}

interface SortPackage {
  packageObject: ArboristPackage
}

export const sortPackage = ({ packageObject }: SortPackage) => {
  // Sort main object
  const mainSorted = sortObject({
    obj: packageObject,
    compareFn: packageOrderFn,
  })

  // Sort sub objects
  const subsSorted = Object.keys(mainSorted).reduce((result, key) => {
    if (Array.isArray(mainSorted[key])) {
      result[key] = mainSorted[key].sort()
    } else if (typeof mainSorted[key] === 'object') {
      result[key] = sortObject({ obj: mainSorted[key] })
    } else {
      result[key] = mainSorted[key]
    }
    return result
  }, <Record<string, any>>{})

  return subsSorted
}
