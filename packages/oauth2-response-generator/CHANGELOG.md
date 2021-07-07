# Changelog

### [6.27.1](https://github.com/wheelroom/wheelroom/compare/6.27.0...6.27.1) (2021-07-07)


### Commits

* better user handling by authorize endpoint ([b70aa39](https://github.com/wheelroom/wheelroom/commit/b70aa39345595008e00845d45d23ce60d2b64a67))
* removed comment ([1b4f478](https://github.com/wheelroom/wheelroom/commit/1b4f4780bd3387febdb47769e19f5e8c789a6c08))

## [6.27.0](https://github.com/wheelroom/wheelroom/compare/6.26.1...6.27.0) (2021-07-07)


### Features

* add optional flow field to code-token ([6a84889](https://github.com/wheelroom/wheelroom/commit/6a8488988012fef9ba913a6e8bffedd8243a5ebe))


### Code Refactoring

* export authorize and token endpoints separately ([faff87d](https://github.com/wheelroom/wheelroom/commit/faff87da59a33a2d6412fcc63adfc51ab001b34d))

### [6.26.1](https://github.com/wheelroom/wheelroom/compare/6.26.0...6.26.1) (2021-07-06)


### Code Refactoring

* create token body on once place only ([32a21da](https://github.com/wheelroom/wheelroom/commit/32a21dacb7ffd0eca7eaf104a4fe813c26a0da2f))
* remove context and use apis ([0cec08a](https://github.com/wheelroom/wheelroom/commit/0cec08a1c2d37be710308373488fd18db03eb6b8))


### Commits

* add context ([099b4ef](https://github.com/wheelroom/wheelroom/commit/099b4ef3cbacbe549eeb99e778728229a463ddc5))
* add jwt type ([66d4c74](https://github.com/wheelroom/wheelroom/commit/66d4c74fb662b740ddd28447f493583f8c764fc5))
* add types for possible other methods to api ([0769b31](https://github.com/wheelroom/wheelroom/commit/0769b319303d23e6dd3ab82ba5f62223f527f7b2))
* added filter valid scopes ([b9d4d3c](https://github.com/wheelroom/wheelroom/commit/b9d4d3c0f5d53016ff8ca792b0e373c8e9d276f1))
* allow scopes as input ([4d69ad2](https://github.com/wheelroom/wheelroom/commit/4d69ad2f3014adfa32215a4debfd9e5b3313b489))
* always add id-token ([ccc1d89](https://github.com/wheelroom/wheelroom/commit/ccc1d89246782ce5287f5b8c6d0fb43cd5010824))
* check for rediret uri origin only ([97c5554](https://github.com/wheelroom/wheelroom/commit/97c5554a7b31925d702d160934fa1f2380f88f7f))
* collection api fixes ([84bb939](https://github.com/wheelroom/wheelroom/commit/84bb939516caf74e113dd42c3f02e2d6adca971a))
* fix audience claim ([02aaf83](https://github.com/wheelroom/wheelroom/commit/02aaf83508ff6e1c31e7e464f6eb408cadcaf8dd))
* fix auth token revoke ([89d6341](https://github.com/wheelroom/wheelroom/commit/89d634123ff0b75058aff6f1d9a52f8d4a884f0f))
* fix bad import ([76a3e5c](https://github.com/wheelroom/wheelroom/commit/76a3e5cf1551d64f19e692073615b26d0e92e4cb))
* fix build ([283a05c](https://github.com/wheelroom/wheelroom/commit/283a05c0d7aecc732d74c311f746863890212bb1))
* fix expires rounding down to seconds ([59e8067](https://github.com/wheelroom/wheelroom/commit/59e806775a9f95c1190f7f5d0feb77cebb57cfce))
* fix expiresAt ([b302207](https://github.com/wheelroom/wheelroom/commit/b302207c8d498553861d70de04c253772c495c3c))
* fix grant_type parameter ([d4f14dc](https://github.com/wheelroom/wheelroom/commit/d4f14dc6aee3fc27af07b8cde0fae3b234e49de2))
* fix redirect uri check ([4e5af0e](https://github.com/wheelroom/wheelroom/commit/4e5af0e005ef948b3885fd63601a67351628532f))
* fix refresh token ([aab6ecd](https://github.com/wheelroom/wheelroom/commit/aab6ecd9c0980bf78066ccb6ec5344652b622dfd))
* fix token revoke arguments ([465895b](https://github.com/wheelroom/wheelroom/commit/465895b983e50c6d4a2da8ce231e60a84c6d07f7))
* fix undefined scope ([19f879d](https://github.com/wheelroom/wheelroom/commit/19f879d6abb3a07d5c090bd3d273561fdb2d9422))
* fixed aud, iss and jti claims ([28a10c3](https://github.com/wheelroom/wheelroom/commit/28a10c31dd4a8c959cce1a8cfe9018e08529e702))
* implement authorize url ([29ec5e4](https://github.com/wheelroom/wheelroom/commit/29ec5e4b8697c95169a2b8de179b30dfcd5a561b))
* implement id token ([10f2dd6](https://github.com/wheelroom/wheelroom/commit/10f2dd6b643ef8e661d69c12de0c358855a584f3))
* implement max age ([4a92bfb](https://github.com/wheelroom/wheelroom/commit/4a92bfbddbd21fcf5cf8cc9378a451cb913e5070))
* implement refresh code grant ([3b76059](https://github.com/wheelroom/wheelroom/commit/3b760592ad0f30c8156421f0552f04fed777656c))
* implemented request to client ([33e991e](https://github.com/wheelroom/wheelroom/commit/33e991e519862599bde4cbc170a9353f3aa224c0))
* improve error types ([cbcc42f](https://github.com/wheelroom/wheelroom/commit/cbcc42fc35667d83a6eacbbd46269b8864ad8355))
* improve types ([f9b6e92](https://github.com/wheelroom/wheelroom/commit/f9b6e92dcf7352c4bf58a9ddf4920b4886abea56))
* improved jwt api ([309a960](https://github.com/wheelroom/wheelroom/commit/309a9602b1a52faf0bd0589fa29cb7637158fa16))
* improved jwt verify sign error handling ([401fb5f](https://github.com/wheelroom/wheelroom/commit/401fb5fdf7bfc27f318c82acbfeab450c720ac72))
* pass request to collectionApi ([84da95b](https://github.com/wheelroom/wheelroom/commit/84da95be695566880d65858993ef75e4c67b1030))
* remove client credentials ([4651399](https://github.com/wheelroom/wheelroom/commit/4651399303012d0572c6a7898c1b6ec008b2a9ba))
* remove console.log ([5be56aa](https://github.com/wheelroom/wheelroom/commit/5be56aabcd5b8b99a4d9d4c28473042819679530))
* rename into collection ([130c4b7](https://github.com/wheelroom/wheelroom/commit/130c4b7c8d7bfcca978ff67007d9e40ce8ffc960))
* rename into oauth2-response-generator ([3c9a7b4](https://github.com/wheelroom/wheelroom/commit/3c9a7b4a0218380496cbcf1fc9e8308c0c1798ef))
* setup response generator ([2b781fc](https://github.com/wheelroom/wheelroom/commit/2b781fc7b84a191966ca6cfad4f71f2646b0955d))
* update generator ([4931957](https://github.com/wheelroom/wheelroom/commit/49319575a2f94a0bd10bd8ce2f7006ae036e3b94))

