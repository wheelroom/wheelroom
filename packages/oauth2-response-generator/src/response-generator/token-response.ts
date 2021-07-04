export interface TokenResponse {
  req: Express.Request
}

export const tokenResponse = ({ req }: TokenResponse) => {
  console.log('tokenResponse, to Be Implemented', req)
}
