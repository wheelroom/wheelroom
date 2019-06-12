import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as util from 'util'
import { ComponentConfig } from '../types/components-map'

const fileExtension = '.ts'
const writeFile = util.promisify(fs.writeFile)

// const firstUpper = (str: string): string =>
//   str.charAt(0).toUpperCase() + str.slice(1)
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
      switch (config.model.wheelroomType) {
        case 'section':
        case 'subPage':
        case 'global':
          fileContent = fragmentTemplate(config.fragment)
          break
      }
      if (fileContent === null) {
        console.log(`No file needed for ${config.model.type}`)
      } else {
        const fileName = camelToDash(config.model.type) + fileExtension
        const writeTo = toPath + '/' + fileName
        console.log(
          `Writing ${fileName} in ${path} for component ${config.model.type}`
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

const fragmentTemplate = (fragment: string) => `${importGraphql}
${exportFragment(fragment)}
`

const importGraphql = `import { graphql } from 'gatsby'`

const exportFragment = (fragment: string) => `export const fragment = graphql\`
${fragment}\``
