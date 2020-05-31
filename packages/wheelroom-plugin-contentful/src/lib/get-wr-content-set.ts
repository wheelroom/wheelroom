import { WheelroomContentSet } from '../types/content-set'
import { PluginArguments } from '../types/plugin-arguments'

export const getWrContentSet = (argv: PluginArguments, pluginOptions: any) => {
  let setNames
  let contentSet: WheelroomContentSet | undefined
  if (
    argv.contentSet &&
    pluginOptions.contentSets &&
    argv.contentSet in pluginOptions.contentSets
  ) {
    console.log(`Using content set: ${argv.contentSet}`)
    contentSet = pluginOptions.contentSets[argv.contentSet]
  } else {
    if (pluginOptions.contentSets) {
      setNames = Object.keys(pluginOptions.contentSets).join('/')
      console.log('Available content sets:', setNames)
    }
    if (argv.contentSet) {
      console.log(
        `Could not find content set ${argv.contentSet}, creating one entry for every model`
      )
    } else {
      console.log(
        `Content set argument not present, creating one entry for every model`
      )
    }
  }
  return contentSet
}
