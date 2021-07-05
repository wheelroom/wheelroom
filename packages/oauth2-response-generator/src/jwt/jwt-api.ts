export type JwtApi = {
  parse: (jwt: string) => Promise<Record<string, any>>
  sign: (payload: Record<string, any>) => Promise<string>
  verify: (jwt: string) => Promise<Record<string, any>>
}
