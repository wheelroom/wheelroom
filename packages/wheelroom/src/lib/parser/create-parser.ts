import {
  ReplaceFunctionsList,
  ReplaceFunctionsLookup,
  ReplaceParams,
  ReplaceVars,
} from '../../types/parser'

/** Contains member variables and methods for the object createParser returns */
interface ParserMembers {
  _replaceFunctionsLookup: ReplaceFunctionsLookup
  _returnsArray: boolean
  _replaceVars: ReplaceVars
  _parseString: (unparsed: string) => string
  addReplaceFunctions: (parseFunctions: ReplaceFunctionsList) => void
  updateVars: (vars: any) => void
  parse<T extends string | string[]>(unparsed: T): T
}

export const createParser = (vars: any) => {
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
            return `bug-replace-function-not-found-${match1}`
          }
        }
      )
      return parsed
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
    updateVars(addVars: any) {
      Object.assign(this._replaceVars, addVars)
    },
    _replaceFunctionsLookup: {},
    _replaceVars: {},
    _returnsArray: false,
  }
  parser.updateVars(vars)
  return parser
}
