export type JwtApi = {
  sign: (payload: Record<string, any>) => Promise<string | undefined>
  verify: (jwt: string) => Promise<Record<string, any> | undefined>
  [otherMethods: string]: any
}
