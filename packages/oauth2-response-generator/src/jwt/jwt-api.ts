type Sign = {
  payload: Record<string, any>
}

type Verify = {
  jwt: string
}

export type JwtApi = {
  sign: ({ payload }: Sign) => Promise<string | undefined>
  verify: ({ jwt }: Verify) => Promise<Record<string, any> | undefined>
  [otherMethods: string]: any
}
