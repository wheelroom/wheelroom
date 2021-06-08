export const actionVariants = [
  'primary',
  'secondary',
  'display',
  'link',
] as const

export type ActionVariant = typeof actionVariants[number]

export type ActionVariantMap = Partial<Record<'action', ActionVariant>>
