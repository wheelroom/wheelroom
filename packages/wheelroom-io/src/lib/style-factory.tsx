export type StyleFactory<Variant = unknown, Options = unknown> = (args: {
  variant?: Variant
  options?: Options
}) => any
