export type JwtApi = {
  sign: (payload: Record<string, any>) => Promise<string>
  verify: (jwt: string) => Promise<Record<string, any>>
}
