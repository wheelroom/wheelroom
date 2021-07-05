export interface AuthorizeResponseBodyPayload {
  code: string
  state: string
}

export const authorizeResponseBodyPayload = ({
  code,
  state,
}: AuthorizeResponseBodyPayload) => {
  return { code, state }
}
