import * as camelCase from 'camelcase'
import * as fs from 'fs'
import * as fse from 'fs-extra'
import * as inquirer from 'inquirer'
import * as util from 'util'
import { camelToDash, firstUpper, noTrailingSlash } from '../helpers'
import { questions } from './questions'

// Component base folder templates
import { getVariationTemplate } from './templates/components/get-variation-template'
import { sectionPropsTemplate } from './templates/components/section-props-template'

// Component folder templates
import { componentBasicVarTemplate } from './templates/components/component/component-basic-var-template'
import { componentIndexTemplate } from './templates/components/component/component-index-template'
import { componentReadmeTemplate } from './templates/components/component/component-readme-template'
import { componentTemplate } from './templates/components/component/component-template'

// Config folder templates
import { configReadmeTemplate } from './templates/configs/config/config-readme-template'
import { graphqlFragmentQueryTemplate } from './templates/configs/config/graphql-fragment-query-template'
import { graphqlFragmentTemplate } from './templates/configs/config/graphql-fragment-template'
import { indexBlockTemplate } from './templates/configs/config/index-block-template'
import { indexSectionPartTemplate } from './templates/configs/config/index-section-part-template'
import { indexSubPageGlobalTemplate } from './templates/configs/config/index-sub-page-global-template'
import { modelNoVariationTemplate } from './templates/configs/config/model-no-variation-template'
import { modelVariationTemplate } from './templates/configs/config/model-variation-template'
import { variationsTemplate } from './templates/configs/config/variations-template'

export interface Vars {
  componentAttributes: string
  componentClassName: string
  componentDescription: string
  componentFileName: string
  componentProps: string
  componentType: string
  fieldsList: string
  graphqlFields: string
  modelFields: string
  wheelroomType: string
}

const writeFile = util.promisify(fs.writeFile)

const writeTemplate = async (
  fileName: string,
  fullComponentPath: string,
  content: string
) => {
  const writeTo = fullComponentPath + '/' + fileName

  console.log(`Writing to ${writeTo}...`)
  await writeFile(writeTo, content)
}

export const createNewModel = async (
  baseComponentPath: string,
  baseConfigPath: string
) => {
  const answers = await inquirer.prompt(questions)

  const componentType = camelCase(answers.componentName)
  console.log(`Thanks, setting up ${componentType} component`)

  // const allWheelroomTypes = ['section', 'part', 'block', 'subPage', 'global']
  const sectionPartBlock = ['section', 'part', 'block']

  const componentClassName = camelCase(answers.componentName, {
    pascalCase: true,
  })
  const componentFileName = camelToDash(componentType)
  const wheelroomType = answers.wheelroomType
  const componentFolderName = camelToDash(componentType)
  const componentDescription = firstUpper(answers.componentName)
  const componentFields = answers.componentFields
    .split(',')
    .map((item: string) => camelCase(item.trim()))
    .sort()

  const fullComponentPath =
    noTrailingSlash(baseComponentPath) + `/${componentFolderName}`
  if (sectionPartBlock.includes(wheelroomType)) {
    try {
      await fse.ensureDir(fullComponentPath)
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
  }

  const fullConfigPath =
    noTrailingSlash(baseConfigPath) + `/${componentFolderName}`
  try {
    await fse.ensureDir(fullConfigPath)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  let fileName
  let content

  const componentProps = [...componentFields, 'variation']
    .sort()
    .map(
      (fieldName: string) => `  ${fieldName}: string
`
    )
    .join('')

  const graphqlFields = [...componentFields, 'variation']
    .sort()
    .map(
      (fieldName: string) => `    ${fieldName}
`
    )
    .join('')

  const fieldsList = [...componentFields, 'variation']
    .sort()
    .map(
      (fieldName: string) => `- ${fieldName}
`
    )
    .join('')

  const modelFields = componentFields
    .map(
      (fieldName: string) => `    ${fieldName}: {
      initialContent: 'Demo content for ${componentType}/${fieldName}',
      settings: {
        helpText: 'Describe how to use the field ${fieldName}',
      },
      specs: {
        localized: ${answers.localizedFields ? 'true' : 'false'},
        name: '${fieldName}',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
`
    )
    .join('')

  const componentAttributes = componentFields
    .map((fieldName: string) => `${fieldName}="Value goes here" `)
    .join('')

  const vars = {
    componentAttributes,
    componentClassName,
    componentDescription,
    componentFileName,
    componentProps,
    componentType,
    fieldsList,
    graphqlFields,
    modelFields,
    wheelroomType,
  } as Vars

  // Write helper files get-variation.tsx and section-props.ts to baseComponentPath
  fileName = `get-variation.tsx`
  content = getVariationTemplate()
  writeTemplate(fileName, noTrailingSlash(baseComponentPath), content)
  fileName = `section-props.ts`
  content = sectionPropsTemplate()
  writeTemplate(fileName, noTrailingSlash(baseComponentPath), content)

  // Write component files
  if (sectionPartBlock.includes(wheelroomType)) {
    fileName = `${componentFileName}-basic-var.tsx`
    content = componentBasicVarTemplate(vars)
    writeTemplate(fileName, fullComponentPath, content)

    fileName = `index.ts`
    content = componentIndexTemplate(vars)
    writeTemplate(fileName, fullComponentPath, content)

    fileName = `README.md`
    content = componentReadmeTemplate(vars)
    writeTemplate(fileName, fullComponentPath, content)

    fileName = `${componentFileName}.tsx`
    content = componentTemplate(vars)
    writeTemplate(fileName, fullComponentPath, content)
  }

  fileName = `README.md`
  content = configReadmeTemplate(vars)
  writeTemplate(fileName, fullConfigPath, content)

  // Write config files for section, part and block types
  if (sectionPartBlock.includes(wheelroomType)) {
    fileName = `model.ts`
    content = modelVariationTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)

    fileName = `variations.ts`
    content = variationsTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }

  // Write config files for section and part types
  if (['section', 'part'].includes(wheelroomType)) {
    fileName = `graphql.ts`
    content = graphqlFragmentTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }

  // Write config files for subPage and global types
  if (['subPage', 'global'].includes(wheelroomType)) {
    fileName = `model.ts`
    content = modelNoVariationTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)

    fileName = `graphql.ts`
    content = graphqlFragmentQueryTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }

  if (['block'].includes(wheelroomType)) {
    fileName = `index.ts`
    content = indexBlockTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }
  if (['section', 'part'].includes(wheelroomType)) {
    fileName = `index.ts`
    content = indexSectionPartTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }
  if (['subPage', 'global'].includes(wheelroomType)) {
    fileName = `index.ts`
    content = indexSubPageGlobalTemplate(vars)
    writeTemplate(fileName, fullConfigPath, content)
  }

  console.log(`Done setting up ${componentType} component`)
}
