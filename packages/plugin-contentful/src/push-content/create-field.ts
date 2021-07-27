export interface CreateField {
  itemsLinkType?: string
  itemsType?: string
  itemsValue?: string[]
  linkType?: string
  type: string
  value?: string
}

export interface CreateLocalizedField extends CreateField {
  locale: string
}

export type SysLink = {
  sys: {
    id: string
    linkType: string
    type: string
  }
}

export const createLocalizedField = (args: CreateLocalizedField) => {
  const { locale, ...rest } = args
  return { [locale]: createField(rest) }
}

export type FieldResponse = string | SysLink | SysLink[]

export const createField = ({
  itemsLinkType,
  itemsType,
  itemsValue,
  linkType,
  type,
  value,
}: CreateField): FieldResponse => {
  switch (type) {
    case 'Boolean':
    case 'Date':
    case 'Integer':
    case 'Symbol':
    case 'Text':
      return value!

    case 'Array':
      return itemsValue!.map(
        (id: string) =>
          createField({
            linkType: itemsLinkType,
            type: itemsType!,
            value: id,
          }) as SysLink
      )

    // case 'RichText':
    // TODO: return a document from mark down parser

    case 'Link':
      return {
        sys: {
          id: value!,
          linkType: linkType!,
          type,
        },
      }

    default:
      return `${type} is not implemented`
  }
}
