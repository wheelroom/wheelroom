export const mediaVariants = ['myVar'] as const

export type MediaVariant = typeof mediaVariants[number]
export type MediaVariantMap = Partial<Record<'media', MediaVariant>>
