import {
  WheelroomComponents,
  WheelroomComponent,
} from '../../types/wheelroom-components'
import { FieldType } from '../../types/wheelroom-fields'

const translatable = ['helpText', 'name', 'items']

export const translateComponents = async (
  components: WheelroomComponents,
  locale: string
) => {
  console.log(`Using locale: ${locale}`)
  Object.entries(components).forEach(
    // Iterate over all components
    ([, component]: [string, WheelroomComponent]) => {
      Object.entries(component.fields).forEach(
        // For each component, iterate over all fields
        ([, field]: [string, FieldType]) => {
          if (!field.translations) {
            return
          }
          const translations = field.translations
          Object.entries(translations).forEach(
            // For each translations, iterate over all properties
            ([property, transLocales]: [string, any]) => {
              if (!translatable.includes(property)) {
                return
              }
              Object.entries(transLocales).forEach(
                ([transLocale, translation]: [string, any]) => {
                  if (transLocale === locale) {
                    ;(field as any)[property] = translation
                  }
                }
              )
            }
          )
          delete field.translations
        }
      )
    }
  )

  return components
}
