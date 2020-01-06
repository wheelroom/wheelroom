import { Options } from '../types/options'

const prefix = 'gastbsy-theme-wheelroom: '

interface OptionCheck {
  message: string
  valid: boolean
}

export const optionsValidator = (options: Options): OptionCheck => {
  const result: OptionCheck = {
    message: '',
    valid: true,
  }
  if (!('queries' in options)) {
    result.message =
      prefix + 'required queries array not found in plugin options'
    result.valid = false
  }
  if (!('pageTemplate' in options)) {
    result.message =
      prefix + 'required pageTemplate not found in plugin options'
    result.valid = false
  }
  if (!('defaultLocale' in options)) {
    result.message = prefix + 'defaultLocale not set in options, using en-US'
    result.valid = true
  }
  return result
}
