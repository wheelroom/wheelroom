import { AnyProps } from '@wheelroom/any/react'

export type ComponentProps<
  Model = undefined,
  Variant = undefined,
  Options = undefined
> = {
  [K in keyof AnyProps]: {
    model?: Model
    variant?: Variant
    options?: Options
  } & AnyProps[K]
}

export type ComponentOptions<Option extends string> = Partial<
  Record<Option, boolean>
>

export type StyleFactory<Variant = undefined, Options = undefined> = (args: {
  variant?: Variant
  options?: Options
}) => any

export type StyleMap<Variant extends string> = Record<Variant, unknown>
