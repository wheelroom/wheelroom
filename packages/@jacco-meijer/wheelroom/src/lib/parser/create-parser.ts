import {
  ReplaceFunctionsList,
  ReplaceFunctionsLookup,
  ReplaceParams,
  ReplaceVars,
} from '../../types/parser'
import {
  WheelroomComponent,
  WheelroomComponents,
} from '../../types/wheelroom-components'
import { FieldType } from '../../types/wheelroom-fields'
import { getCases } from './get-cases'

// Import all replace functions and export them as one
import { componentNameFunc } from './replace-functions/component-name'
import { componentNameArrayFunc } from './replace-functions/component-name-array'
import { componentVarFunc } from './replace-functions/component-var'
import { fieldNameFunc } from './replace-functions/field-name'
import { fieldTypeFunc } from './replace-functions/field-type'
import { firstAllowedComponentFunc } from './replace-functions/first-allowed-component'
import { firstItemFunc } from './replace-functions/first-item'

export const replaceFunctions = [
  ...componentNameFunc,
  ...componentNameArrayFunc,
  ...componentVarFunc,
  ...fieldNameFunc,
  ...fieldTypeFunc,
  ...firstAllowedComponentFunc,
  ...firstItemFunc,
]

interface CreateParser {
  component?: WheelroomComponent
  components?: WheelroomComponents
  componentName: string
  field?: FieldType
  fieldName?: string
  fieldType?: string
}

interface ParserMembers {
  replaceVars: ReplaceVars
  replaceFunctionsLookup: ReplaceFunctionsLookup
  returnsArray: boolean
  addParseFunctions: (parseFunctions: ReplaceFunctionsList) => void
  parseString: (unparsed: string) => string
  parse<T extends string | string[]>(unparsed: T): T
}

export const createParser = (context: CreateParser) => {
  const parser: ParserMembers = {
    addParseFunctions(addReplaceFunctions: ReplaceFunctionsList) {
      addReplaceFunctions.reduce((result: ReplaceFunctionsLookup, rf) => {
        result[rf.search] = rf
        return result
      }, this.replaceFunctionsLookup)
    },

    parse<T extends string | string[]>(unparsed: T): T {
      if (typeof unparsed === 'string') {
        const parsed = this.parseString(unparsed)
        return parsed as T
      }
      if (Array.isArray(unparsed)) {
        const result: string[] = []
        const unparsedArray: string[] = unparsed
        unparsedArray.forEach((str: string) => {
          const parsed = this.parseString(str)
          if (this.returnsArray) {
            result.push(...parsed.split(', '))
          } else {
            result.push(parsed)
          }
        })
        return result as T
      }
      return 'bug-create-parser' as T
    },

    parseString(unparsed: string) {
      const params: ReplaceParams = {}
      const parsed = unparsed.replace(
        /%([^(%]+)(?:\(([^)]+)\))?%/g,
        (fullMatch, match1, match2) => {
          if (match2) {
            const splitted = match2.split(',')
            splitted.forEach((fullParam: string) => {
              const [name, value] = fullParam.split(':')
              if (name && value) {
                params[name.trim()] = value.trim()
              }
            })
          }
          if (match1 in this.replaceFunctionsLookup) {
            this.returnsArray =
              this.replaceFunctionsLookup[match1].returnsArray || false
            const func = this.replaceFunctionsLookup[match1].replace
            const replaced = func(this.replaceVars, params)
            return replaced
          } else {
            return `bug--replace-function-not-found-${match1}`
          }
        }
      )
      return parsed
    },
    replaceFunctionsLookup: {},
    replaceVars: {
      cases: {},
      component: context.component,
      componentName: context.componentName,
      components: context.components,
      field: context.field,
      fieldName: context.fieldName,
      fieldType: context.fieldType,
    },
    returnsArray: false,
  }
  if (parser.replaceVars.componentName) {
    parser.replaceVars.cases.componentName = getCases(
      parser.replaceVars.componentName
    )
  }
  if (parser.replaceVars.fieldName) {
    parser.replaceVars.cases.fieldName = getCases(parser.replaceVars.fieldName)
  }
  if (parser.replaceVars.fieldType) {
    parser.replaceVars.cases.fieldType = getCases(parser.replaceVars.fieldType)
  }

  return parser
}
