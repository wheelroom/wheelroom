# Authorization code

## /authorize

- client_id
- code_challenge
- code_challenge_method (plain/S256)
- redirect_uri
- response_type = code
- state

## /redirect_uri (1)

- code
- state

## /token

- client_id
- client_secret
- code
- code_verifier
- grant_type = authorization_code
- redirect_uri

## /redirect_uri (2)

- access_token
- expires_in
- refresh_token
- scope
- token_type = Bearer
