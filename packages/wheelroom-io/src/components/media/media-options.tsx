export const mediaOptions = ['myOption'] as const
export type MediaOption = typeof mediaOptions[number]
export type MediaOptions = Partial<Record<MediaOption, boolean>>
