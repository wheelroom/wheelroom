import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as util from 'util'
import { ComponentConfig } from '../types/components-map'

const writeFile = util.promisify(fs.writeFile)

const firstUpper = str => str.charAt(0).toUpperCase() + str.slice(1)
const camelToDash = str =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
const noTrailingSlash = str => str.replace(/\/$/, '')

export const generateFiles = async (
  componentConfigs: ComponentConfig[],
  path: string
) => {
  const toPath = noTrailingSlash(path)
  try {
    await fse.ensureDir(path)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

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
        const fileName = camelToDash(config.componentId) + '.js'
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
