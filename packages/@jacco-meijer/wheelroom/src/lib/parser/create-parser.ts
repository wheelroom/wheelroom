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

interface CreateParser {
  component?: WheelroomComponent
  components?: WheelroomComponents
  componentName?: string
  field?: FieldType
  fieldName?: string
  fieldType?: string
}

/** Contains member variables and methods for the object createParser returns */
interface ParserMembers {
  _replaceFunctionsLookup: ReplaceFunctionsLookup
  _returnsArray: boolean
  _replaceVars: ReplaceVars
  _parseString: (unparsed: string) => string
  _updateCases: () => void
  addReplaceFunctions: (parseFunctions: ReplaceFunctionsList) => void
  updateVars: (vars: CreateParser) => void
  parse<T extends string | string[]>(unparsed: T): T
}

export const createParser = (context: CreateParser) => {
  const parser: ParserMembers = {
    _parseString(unparsed: string) {
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
          if (match1 in this._replaceFunctionsLookup) {
            this._returnsArray =
              this._replaceFunctionsLookup[match1].returnsArray || false
            const func = this._replaceFunctionsLookup[match1].replace
            const replaced = func(this._replaceVars, params)
            return replaced
          } else {
            return `bug--replace-function-not-found-${match1}`
          }
        }
      )
      return parsed
    },
    _updateCases() {
      if (parser._replaceVars.componentName) {
        parser._replaceVars.cases.componentName = getCases(
          parser._replaceVars.componentName
        )
      }
      if (parser._replaceVars.fieldName) {
        parser._replaceVars.cases.fieldName = getCases(
          parser._replaceVars.fieldName
        )
      }
      if (parser._replaceVars.fieldType) {
        parser._replaceVars.cases.fieldType = getCases(
          parser._replaceVars.fieldType
        )
      }
    },
    addReplaceFunctions(addReplaceFunctions: ReplaceFunctionsList) {
      addReplaceFunctions.reduce((result: ReplaceFunctionsLookup, rf) => {
        result[rf.search] = rf
        return result
      }, this._replaceFunctionsLookup)
    },
    parse<T extends string | string[]>(unparsed: T): T {
      if (typeof unparsed === 'string') {
        const parsed = this._parseString(unparsed)
        return parsed as T
      }
      if (Array.isArray(unparsed)) {
        const result: string[] = []
        const unparsedArray: string[] = unparsed
        unparsedArray.forEach((str: string) => {
          const parsed = this._parseString(str)
          if (this._returnsArray) {
            result.push(...parsed.split(', '))
          } else {
            result.push(parsed)
          }
        })
        return result as T
      }
      return 'bug-create-parser' as T
    },
    updateVars(vars: CreateParser) {
      Object.assign(this._replaceVars, vars)
      this._updateCases()
    },
    _replaceFunctionsLookup: {},
    _replaceVars: {
      cases: {},
      component: context.component,
      componentName: context.componentName,
      components: context.components,
      field: context.field,
      fieldName: context.fieldName,
      fieldType: context.fieldType,
    },
    _returnsArray: false,
  }
  parser._updateCases()
  return parser
}
