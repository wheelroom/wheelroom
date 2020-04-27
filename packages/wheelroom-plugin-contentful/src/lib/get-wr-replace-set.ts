import { WheelroomReplaceSet } from '../types/replace-sets'

export const getWrReplaceSet = (argv: any, pluginOptions: any) => {
  let setNames
  let replaceSet: WheelroomReplaceSet | undefined
  if (
    argv.replaceSet &&
    pluginOptions.replaceSets &&
    argv.replaceSet in pluginOptions.replaceSets
  ) {
    console.log(`Using replace set: ${argv.replaceSet}`)
    replaceSet = pluginOptions.replaceSets[argv.replaceSet]
  } else {
    if (pluginOptions.replaceSets) {
      setNames = Object.keys(pluginOptions.replaceSets).join('/')
      console.log('Available replace sets:', setNames)
    }
    if (argv.replaceSet) {
      console.log(`Could not find replace set ${argv.replaceSet}`)
    } else {
      console.log(`Replace set argument not present`)
    }
  }
  return replaceSet
}
