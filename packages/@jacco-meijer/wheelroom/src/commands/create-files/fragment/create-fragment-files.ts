import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as util from 'util'
import { ComponentConfig } from '../../../types/component-config'
import { camelToDash, noTrailingSlash } from '../helpers'
import { fragmentTemplate } from './templates/fragment-template'

const fileExtension = '.ts'
const writeFile = util.promisify(fs.writeFile)

export const createFragmentFiles = async (
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
        case 'part':
          fileContent = fragmentTemplate(
            config.fragment,
            config.model.type,
            config.model.wheelroomType
          )
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
  console.log(`Done writing all files`)
}
