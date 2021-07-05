import { b64utohex } from 'jsrsasign'

export interface HeaderToBasicAuth {
  authHeader?: string
}

export const headerTobasicAuth = ({ authHeader }: HeaderToBasicAuth) => {
  if (!authHeader || !authHeader.startsWith('Basic ')) return

  const usernamePassword = b64utohex(authHeader.slice(6))
  const splitted = usernamePassword.split(':')
  if (splitted.length !== 2) return

  const [username, password] = splitted
  return { username, password }
}
