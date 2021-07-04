export interface AuthorizeResponse {
  req: Express.Request
}

export const authorizeResponse = ({ req }: AuthorizeResponse) => {
  console.log('authorizeResponse, to Be Implemented', req)
}
