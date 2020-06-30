/* eslint-disable no-undef */
/**
 * Generates this typescript file:
 * src/wheelroom-config/content-sets/content-types-${contentSet}.ts
 *
 * How it works
 *
 * The script imports the content set and models:
 *
 * import { contentSets } from '../content-sets/content-sets'
 * import { coreModels } from '@wheelroom/core'
 *
 *
 * It then generates interface definitions for each component. The content set
 * is used to find valid component names in references. Like e.g.
 *
 * link?: 'homePage' | 'productPage' | 'backgroundPage' | 'contactPage'
 *
 * Runs like this:
 * - npm run compile-config
 * - node compiled-config/content-types-generator/content-types-generator.js <starter>
 *
 *
 * Note: the script needs a valid content set to generate content types for the
 * same content set. This means you can easily get stuck. When by accident
 * invalid types are generated, the content set is invalid and the generator
 * cannot be used to fix the invalid types.
 *
 */

import {
  FieldType,
  FieldTypeName,
  WheelroomComponent,
} from '@wheelroom/wheelroom'
import * as fse from 'fs-extra'
import { coreModelConfig } from '@wheelroom/core'
import { navigationModelConfig } from '@wheelroom/wheel-navigation'
import { tableModelConfig } from '@wheelroom/wheel-table'
import { blogModelConfig } from '@wheelroom/wheel-blog'
import { textModelConfig } from '@wheelroom/wheel-text'
import { topicModelConfig } from '@wheelroom/wheel-topic'
import { contentSets } from '../content-sets/content-sets'

const models = {
  ...coreModelConfig,
  ...blogModelConfig,
  ...navigationModelConfig,
  ...tableModelConfig,
  ...textModelConfig,
  ...topicModelConfig,
}

type ContentSetName = 'starter'

const contentSet: ContentSetName = process.argv[2] as ContentSetName

if (!['starter'].includes(contentSet)) {
  console.error(`Bad content set: '${contentSet}'
Available content sets: starter`)
  process.exit(1)
}

type TypeTable = Record<FieldTypeName, string>

const wheelroomTypeToTsType: TypeTable = {
  checkbox: 'string[]',
  date: 'string',
  dropdown: '',
  media: 'boolean',
  longText: 'string',
  multipleComponents: 'string[]',
  number: 'number',
  richText: 'string',
  shortText: 'string',
  singleComponent: 'string[]',
  tags: 'string[]',
}

const getAllowedComponentIds = (field: FieldType, limitResults: string[]) => {
  // Limit values to defined models that fit allowedComponents
  if (field.type === 'singleComponent' || field.type === 'multipleComponents') {
    Object.entries(contentSets[contentSet]).forEach(
      ([componentId, compInstance]: [string, any]) => {
        if (field.allowedComponents.includes(compInstance.model)) {
          limitResults.push(`'${componentId}'`)
        }
      }
    )
  }
}

const getPageSections = (field: FieldType, limitResults: string[]) => {
  // Limit values to defined models that have settings.asPageSection
  if (field.type === 'multipleComponents') {
    Object.entries(contentSets[contentSet]).forEach(
      ([componentId, compInstance]: [string, any]) => {
        if (models[compInstance.model].settings.asPageSection) {
          limitResults.push(`'${componentId}'`)
        }
      }
    )
  }
}

const getFieldValue = (field: FieldType) => {
  const limitResults: string[] = []
  getAllowedComponentIds(field, limitResults)
  if (field.type === 'dropdown') {
    // Limit values to dropdown items
    limitResults.push(...field.items.map((item: string) => `'${item}'`))
    return limitResults.join(' | ')
  } else if (field.type === 'singleComponent') {
    if (limitResults.length > 0) {
      return limitResults.join(' | ')
    } else {
      return 'string[]'
    }
  } else if (field.type === 'multipleComponents') {
    if (limitResults.length > 0) {
      return `Array<${limitResults.join(' | ')}>`
    } else {
      return 'string[]'
    }
  } else if (field.type === 'checkbox') {
    // Limit values to checkbox items
    limitResults.push(...field.items.map((item: string) => `'${item}'`))
    return `Array<${limitResults.join(' | ')}>`
  }
  return wheelroomTypeToTsType[field.type]
}

const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

let modelString = 'type Model ='
let content = ''

Object.entries(models).forEach(
  ([componentName, wrComponent]: [string, WheelroomComponent]) => {
    modelString += `
  | ${firstUpperCase(componentName)}Model`
    content += `interface ${firstUpperCase(componentName)}Model {
  fields: {
`
    Object.entries(wrComponent.fields).forEach(
      ([fieldName, field]: [string, FieldType]) => {
        if (fieldName[0] === '_') {
          return
        }
        let fieldValue = getFieldValue(field)
        if (fieldName === 'sections') {
          // Sections are set with the %componentNameArray% variable, handle
          // them manually here
          const limitResults: string[] = []
          getPageSections(field, limitResults)
          fieldValue = `Array<${limitResults.join(' | ')}>`
        }

        content += `    ${fieldName}${field.required ? '' : '?'}: ${fieldValue}
`
      }
    )
    content += `    title: string
`
    content += `  }
  model: '${componentName}'
}
`
  }
)

content += `${modelString}

export interface ContentTypes {
  [componentId: string]: Model
}
`

fse.outputFile(
  `src/wheelroom-config/content-sets/content-types-${contentSet}.ts`,
  content
)
