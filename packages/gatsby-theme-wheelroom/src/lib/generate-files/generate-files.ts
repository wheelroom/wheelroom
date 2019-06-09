import * as fs from 'fs'
import * as mkdirp from 'mkdirp'
import * as util from 'util'
import { ComponentConfig } from '../types/components-map'

const writeFile = util.promisify(fs.writeFile)
const mkdirpp = util.promisify(mkdirp)

const firstUpper = str => str.charAt(0).toUpperCase() + str.slice(1)
const camelToDash = str =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()

export const generateFiles = async (
  componentConfigs: ComponentConfig[],
  path: string
) => {
  console.log(`Creating path: ${path}`)
  // Returns path without trailing slash
  const toPath = await mkdirpp(path, {})

  await Promise.all(
    componentConfigs.map(async config => {
      let fileContent = null
      switch (config.type) {
        case 'section':
        case 'subPage':
          fileContent = componentFragmentTemplate(
            firstUpper(config.componentId),
            config.fragment
          )
          break

        case 'global':
          fileContent = onlyFragmentTemplate(config.fragment)
          break
      }
      if (fileContent === null) {
        console.log(`No file needed for ${config.componentId}`)
      } else {
        const fileName = camelToDash(config.componentId) + '.jsx'
        const writeTo = toPath + '/' + fileName
        console.log(
          `Writing ${fileName} in ${path} for component ${config.componentId}`
        )
        try {
          await writeFile(writeTo, fileContent)
        } catch (error) {
          console.log(error)
        }
      }
    })
  )
  console.log('Done wrting all files')
}

// Template for: global
const onlyFragmentTemplate = fragment => `${importGraphql}
${exportFragment(fragment)}
`
// Template for: section, subPage
const componentFragmentTemplate = (
  componentObject,
  fragment
) => `${importGraphql}
${exportComponent(componentObject)}
${exportFragment(fragment)}
`

const importGraphql = `import { graphql } from 'gatsby'`

const exportFragment = fragment => `export const fragment = graphql\`
${fragment}\``

const exportComponent = componentObject =>
  `export { ${componentObject} } from 'gatsby-theme-wheelroom'`
