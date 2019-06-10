import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as util from 'util'
import { ComponentConfig } from '../types/components-map'

const fileExtension = '.ts'
const writeFile = util.promisify(fs.writeFile)

const firstUpper = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)
const camelToDash = (str: string): string =>
  str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
const noTrailingSlash = (str: string): string => str.replace(/\/$/, '')

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
    componentConfigs.map(async (config: ComponentConfig) => {
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
        const fileName = camelToDash(config.componentId) + fileExtension
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
const onlyFragmentTemplate = (fragment: string) => `${importGraphql}
${exportFragment(fragment)}
`
// Template for: section, subPage
const componentFragmentTemplate = (
  componentObject: string,
  fragment: string
) => `${importGraphql}
${exportComponent(componentObject)}
${exportFragment(fragment)}
`

const importGraphql = `import { graphql } from 'gatsby'`

const exportFragment = (fragment: string) => `export const fragment = graphql\`
${fragment}\``

const exportComponent = (componentObject: string) =>
  `export { ${componentObject} } from 'gatsby-theme-wheelroom'`
