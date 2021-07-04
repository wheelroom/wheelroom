// Collections
// - code
// - client
// - token
// - scope
// - user

// Grants (<https://datatracker.ietf.org/doc/html/rfc6749#section-1.3>)
// - Authorization code
// - Client Credentials
// - Refresh token (<https://datatracker.ietf.org/doc/html/rfc6749#section-1.5>)
// - Implicit (not implemented)
// - Resource Owner Password Credentials (not implemented)

// PKCE (<https://datatracker.ietf.org/doc/html/rfc7636>)

export const newTokenResponse = (req: Express.Request) => {
  console.log('To Be Implemented')
}

export const newAuthorizeResponse = (req: Express.Request) => {
  console.log('To Be Implemented')
}

export const finalizeAuthorizeResponse = (req: Express.Request) => {
  console.log('To Be Implemented')
}

export const securutyHeaders = {
  pragma: 'no-cache',
  'cache-control': 'no-store',
  'content-type': 'application/json; charset=UTF-8',
}
