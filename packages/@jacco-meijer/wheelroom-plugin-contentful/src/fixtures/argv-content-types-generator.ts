/**
 * Generates this typescript file: src/fixtures/argv-content-types.ts
 *
 * for WheelroomComponents object that can be used to write content.
 *
 * Runs like this:
 * npm run build:compile
 * node dist/fixtures/argv-content-types-generator.js
 *
 */

import { FieldType, WheelroomComponent } from '@jacco-meijer/wheelroom'
import fse from 'fs-extra'
import { argvComponents } from './argv-components'

const firstUpperCase = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

let modelString = 'type Model ='
let content = ''

Object.entries(argvComponents).forEach(
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
        content += `    ${fieldName}${field.required ? '' : '?'}: any
`
      }
    )
    content += `  }
  model: '${componentName}'
}
`
  }
)

content += `${modelString}

export interface ArgvContent {
  [componentId: string]: Model
}
`

fse.outputFile('src/fixtures/argv-content-types.ts', content)
