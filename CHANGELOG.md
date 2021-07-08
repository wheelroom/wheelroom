# Changelog

# Release 6.27.5

## @wheelroom/oauth2-response-generator 6.27.5

### [6.27.5](https://github.com/wheelroom/wheelroom/compare/6.27.4...6.27.5) (2021-07-08)


### Commits

* use scopes from storage during authorization token request ([b7579ef](https://github.com/wheelroom/wheelroom/commit/b7579ef29e14d3f6ec03e8a8f7d8d9b43db42cdd))


# Release 6.27.4

## @wheelroom/oauth2-response-generator 6.27.4

### [6.27.4](https://github.com/wheelroom/wheelroom/compare/6.27.2...6.27.4) (2021-07-08)


### Commits

* set id token audience to client id ([5e28979](https://github.com/wheelroom/wheelroom/commit/5e28979c9494dbdff743d51551961548d8ec34ff))


# Release 6.27.3

## @wheelroom/oauth2-response-generator 6.27.3

### [6.27.3](https://github.com/wheelroom/wheelroom/compare/6.27.2...6.27.3) (2021-07-08)


### Commits

* set id token audience to client id ([5e28979](https://github.com/wheelroom/wheelroom/commit/5e28979c9494dbdff743d51551961548d8ec34ff))


# Release 6.27.2

## @wheelroom/oauth2-response-generator 6.27.2

### [6.27.2](https://github.com/wheelroom/wheelroom/compare/6.27.1...6.27.2) (2021-07-08)


### Commits

* rename flow into flowState and authCode into codeToken ([a200d08](https://github.com/wheelroom/wheelroom/commit/a200d08327d8d061aac5ca77ced28cb6f85bc52f))


# Release 6.27.1

## @wheelroom/oauth2-response-generator 6.27.1

### [6.27.1](https://github.com/wheelroom/wheelroom/compare/6.27.0...6.27.1) (2021-07-07)


### Commits

* better user handling by authorize endpoint ([b70aa39](https://github.com/wheelroom/wheelroom/commit/b70aa39345595008e00845d45d23ce60d2b64a67))
* removed comment ([1b4f478](https://github.com/wheelroom/wheelroom/commit/1b4f4780bd3387febdb47769e19f5e8c789a6c08))


# Release 6.27.0

## @wheelroom/oauth2-response-generator 6.27.0

## [6.27.0](https://github.com/wheelroom/wheelroom/compare/6.26.1...6.27.0) (2021-07-07)


### Features

* add optional flow field to code-token ([6a84889](https://github.com/wheelroom/wheelroom/commit/6a8488988012fef9ba913a6e8bffedd8243a5ebe))


### Code Refactoring

* export authorize and token endpoints separately ([faff87d](https://github.com/wheelroom/wheelroom/commit/faff87da59a33a2d6412fcc63adfc51ab001b34d))


# Release 6.26.1

## @wheelroom/oauth2-response-generator 6.26.1

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


# Release 6.26.0

## @wheelroom/make 6.26.0

## [6.26.0](https://github.com/wheelroom/wheelroom/compare/6.25.5...6.26.0) (2021-06-23)


### Features

* use all packages if no package name is specified ([41a13ec](https://github.com/wheelroom/wheelroom/commit/41a13ec385efeee559075fe70d527990af5078c3))


### Code Refactoring

* use a root tsconfig.json ([a8a8911](https://github.com/wheelroom/wheelroom/commit/a8a89112c5ee282bf055ecb8e10b890be4c9194b))


### Commits

* fix bugs ([5b98159](https://github.com/wheelroom/wheelroom/commit/5b981597e121e35be1fdaf78a9a531a9e4313be7))
* fix types ([80caab6](https://github.com/wheelroom/wheelroom/commit/80caab63f7c6f707332a953991a834a1f4ca3f72))


# Release 6.25.5

## @wheelroom/make 6.25.5

### [6.25.5](https://github.com/wheelroom/wheelroom/compare/6.25.4...6.25.5) (2021-06-18)


### Bug Fixes

* make targetNode node build first ([6401f16](https://github.com/wheelroom/wheelroom/commit/6401f1623939577af367e3db051136fc612b3a78))


# Release 6.25.4

## @wheelroom/nextjs-starter 6.25.4

### [6.25.4](https://github.com/wheelroom/wheelroom/compare/6.25.3...6.25.4) (2021-06-16)



## @wheelroom/wheelroom-io 6.25.4

### [6.25.4](https://github.com/wheelroom/wheelroom/compare/6.25.3...6.25.4) (2021-06-16)



## @wheelroom/any 6.25.4

### [6.25.4](https://github.com/wheelroom/wheelroom/compare/6.25.3...6.25.4) (2021-06-16)


# Release 6.25.3

## @wheelroom/wheelroom-io 6.25.3

### [6.25.3](https://github.com/wheelroom/wheelroom/compare/6.25.2...6.25.3) (2021-06-16)



## @wheelroom/css-theme 6.25.3

### [6.25.3](https://github.com/wheelroom/wheelroom/compare/6.25.2...6.25.3) (2021-06-16)


# Release 6.25.2

## @wheelroom/push 6.25.2

### [6.25.2](https://github.com/wheelroom/wheelroom/compare/6.25.1...6.25.2) (2021-06-16)


# Release 6.25.1

## @wheelroom/make 6.25.1

### [6.25.1](https://github.com/wheelroom/wheelroom/compare/6.25.0...6.25.1) (2021-06-16)


### Bug Fixes

* template build path ([9fe50d2](https://github.com/wheelroom/wheelroom/commit/9fe50d2e3117be2ebafb5efa77adb1bac544e2c0))


### Commits

* remove old comment ([5f04b70](https://github.com/wheelroom/wheelroom/commit/5f04b7086ad76dd33a99b94991684072ddeb9ac2))


### Code Refactoring

* change make package exports to plain ([19d1003](https://github.com/wheelroom/wheelroom/commit/19d100310613151694d89d8286b1adb97a2bba10))


# Release 6.25.0

## @wheelroom/make 6.25.0

## [6.25.0](https://github.com/wheelroom/wheelroom/compare/6.24.6...6.25.0) (2021-06-13)


### Features

* sort npm packages on sync ([45b10f8](https://github.com/wheelroom/wheelroom/commit/45b10f8e9db19d5e11cfffe1150c17b58cb3fc2c))


### Commits

* add missing pakcage keys to sort ([d0728a5](https://github.com/wheelroom/wheelroom/commit/d0728a5ee2464fb2bb6cf50b97aa1b137c98e96b))
* added proper types ([3911906](https://github.com/wheelroom/wheelroom/commit/39119060be4b2d19684ef7ff0d847f535e75ee6b))
* fix sync bug ([504e313](https://github.com/wheelroom/wheelroom/commit/504e31356b635bdc115bba82ea940746ecd202c9))
* sort package jsons ([cbc3640](https://github.com/wheelroom/wheelroom/commit/cbc36409b061a237c51df4a53868ca8217c32a1c))
* update sort order ([60b85ef](https://github.com/wheelroom/wheelroom/commit/60b85ef79060c56c18cbd33d521f87ac301878d6))


# Release 6.24.6

## @wheelroom/make 6.24.6

### [6.24.6](https://github.com/wheelroom/wheelroom/compare/6.24.5...6.24.6) (2021-06-12)


# Release 6.24.5

## @wheelroom/wheelroom-io 6.24.5

### [6.24.5](https://github.com/wheelroom/wheelroom/compare/6.24.4...6.24.5) (2021-06-12)



## @wheelroom/css-theme 6.24.5

### [6.24.5](https://github.com/wheelroom/wheelroom/compare/6.24.4...6.24.5) (2021-06-12)


# Release 6.24.4

## @wheelroom/nextjs-starter 6.24.4

### [6.24.4](https://github.com/wheelroom/wheelroom/compare/6.24.3...6.24.4) (2021-06-12)


### Commits

* fix imports ([9230aed](https://github.com/wheelroom/wheelroom/commit/9230aedb33375d7061d11e587a67740f56d69305))
* sort package jsons ([397a0a7](https://github.com/wheelroom/wheelroom/commit/397a0a71d0668c313f57e6dc24f1b35c5b9c65df))
* synced package.json ([a8bef50](https://github.com/wheelroom/wheelroom/commit/a8bef5020f978f0bab3faef3c8446163a345afdf))



## @wheelroom/wheelroom-io 6.24.4

### [6.24.4](https://github.com/wheelroom/wheelroom/compare/6.24.3...6.24.4) (2021-06-12)


### Code Refactoring

* into cjs and mjs modules ([4f115cf](https://github.com/wheelroom/wheelroom/commit/4f115cf89d36f5afa5499f30cc3dfc300a28dee6))


### Commits

* fix css-vars import ([fb11084](https://github.com/wheelroom/wheelroom/commit/fb110840c5d7c0e165d1faeaf8ef261f21977b8e))
* fix imports ([5c8184d](https://github.com/wheelroom/wheelroom/commit/5c8184d9b136a72c7e19175ba0d2197b1a066b7e))
* sort package jsons ([397a0a7](https://github.com/wheelroom/wheelroom/commit/397a0a71d0668c313f57e6dc24f1b35c5b9c65df))
* synced package.json ([a8bef50](https://github.com/wheelroom/wheelroom/commit/a8bef5020f978f0bab3faef3c8446163a345afdf))



## @wheelroom/any 6.24.4

### [6.24.4](https://github.com/wheelroom/wheelroom/compare/6.24.3...6.24.4) (2021-06-12)


### Code Refactoring

* into cjs and mjs modules ([4f115cf](https://github.com/wheelroom/wheelroom/commit/4f115cf89d36f5afa5499f30cc3dfc300a28dee6))


### Commits

* improved make bundle ([ee9b295](https://github.com/wheelroom/wheelroom/commit/ee9b295550b50f9a26a8e924fb65d0a01615627e))
* sort package jsons ([397a0a7](https://github.com/wheelroom/wheelroom/commit/397a0a71d0668c313f57e6dc24f1b35c5b9c65df))
* synced package.json ([a8bef50](https://github.com/wheelroom/wheelroom/commit/a8bef5020f978f0bab3faef3c8446163a345afdf))
* update package.jsons ([29b144c](https://github.com/wheelroom/wheelroom/commit/29b144cd8af4e70feaa67bc2d7121943a2d7173f))


# Release 6.24.3

## @wheelroom/wheelroom-io 6.24.3

### [6.24.3](https://github.com/wheelroom/wheelroom/compare/6.24.2...6.24.3) (2021-06-10)



## @wheelroom/css-theme 6.24.3

### [6.24.3](https://github.com/wheelroom/wheelroom/compare/6.24.2...6.24.3) (2021-06-10)


# Release 6.24.2

## @wheelroom/wheelroom-io 6.24.2

### [6.24.2](https://github.com/wheelroom/wheelroom/compare/6.24.1...6.24.2) (2021-06-10)


### Commits

* add card styling ([3b04eb7](https://github.com/wheelroom/wheelroom/commit/3b04eb7473c638a2446ba150d2d8f3ca334a5c4d))
* add full topic query ([adf9e0f](https://github.com/wheelroom/wheelroom/commit/adf9e0f6914e4b010935135ac234e9b744ce0634))
* add image and video ([a172407](https://github.com/wheelroom/wheelroom/commit/a172407c9f62e9c6b2e6a4f2f3dccb20de0d9ce1))
* add typography ([6cd1ae3](https://github.com/wheelroom/wheelroom/commit/6cd1ae3838c8c7a8d48aec3c62d702b0832f5bb3))
* add typography ([4186820](https://github.com/wheelroom/wheelroom/commit/4186820251b426879707920b980eca2801a0ddb3))
* cleanup ([057f9da](https://github.com/wheelroom/wheelroom/commit/057f9da792bfdb332f30605522d12cc4e3679f47))
* copy in old topic ([3fb1be4](https://github.com/wheelroom/wheelroom/commit/3fb1be42a522f122f75b10bb37f5ebe8c45722de))
* dynamic heading ([3259d78](https://github.com/wheelroom/wheelroom/commit/3259d786f474b8080bb5427229a37535002922fe))
* fix heading numbering ([8021bcb](https://github.com/wheelroom/wheelroom/commit/8021bcbae7486b3f9322580f422cb12bb25bf82e))
* fix headline ([8ca5e15](https://github.com/wheelroom/wheelroom/commit/8ca5e153b10d3602230185c00d2b1e10814b939d))
* flatten folder structure ([9cea935](https://github.com/wheelroom/wheelroom/commit/9cea935d786ab293bd21b8ccad94d8277435bc65))
* gallery styling ([0445fb6](https://github.com/wheelroom/wheelroom/commit/0445fb669a6616bd27ae3907b40b74a1ab554709))
* implement section and topic container styles ([794c0ad](https://github.com/wheelroom/wheelroom/commit/794c0adc5b30718d02ff2b06ee54a29a472fd5ab))
* implement topic actions ([fb91ca6](https://github.com/wheelroom/wheelroom/commit/fb91ca6a5edb9cd74cad4467d4308fb03a12810a))
* implement variantMap ([82b5e0b](https://github.com/wheelroom/wheelroom/commit/82b5e0b6e7efb8dd594373d834929c3700c2316c))
* introduce variantMap ([b01445c](https://github.com/wheelroom/wheelroom/commit/b01445c7e18a963ffafb6dec5864126c43db66ec))
* more simplifications ([829626f](https://github.com/wheelroom/wheelroom/commit/829626f7e673a17a9039a135377db7ad1c30fc85))
* move ncss trees ([f4e09f0](https://github.com/wheelroom/wheelroom/commit/f4e09f0892ba5a55c7385ede3fc537a10b663a58))
* remove CSSProperties ([39359a9](https://github.com/wheelroom/wheelroom/commit/39359a9a9cb6fd918cde7b406c57f7da794872c3))
* remove old code ([d3897cf](https://github.com/wheelroom/wheelroom/commit/d3897cff63ef82212cd3abb6fbd5790f310daf65))
* remove topic options ([47493c1](https://github.com/wheelroom/wheelroom/commit/47493c16701c6effe126e96c9028ad4286d9c0a9))
* revert options ([f9ee67e](https://github.com/wheelroom/wheelroom/commit/f9ee67ec67d0613375a0af3cd0b8fe70816f68b7))
* rewriting first components ([710a314](https://github.com/wheelroom/wheelroom/commit/710a314ecec077d7345c29b8efcb227cccb6e0e9))
* setup basic page ([8e8477d](https://github.com/wheelroom/wheelroom/commit/8e8477db869bd182ccf8d1a579fb01bd923a85f0))
* setup featured styling ([88d41c9](https://github.com/wheelroom/wheelroom/commit/88d41c97d236a15fa6b25e2596d05e3f4ffd7da3))
* setup media ([691286b](https://github.com/wheelroom/wheelroom/commit/691286bcacf0b30fffb48077fdde647d4397b2ee))
* setup sections ([7caf6d5](https://github.com/wheelroom/wheelroom/commit/7caf6d556b4394280d97b2849a533e5d11c0e373))
* simplify topic ([a8cd0be](https://github.com/wheelroom/wheelroom/commit/a8cd0be3212603b80e309c9ef5fe1c766b8b8915))
* update content variantMap ([15d8ae8](https://github.com/wheelroom/wheelroom/commit/15d8ae80351c080a59169583bd197e163f13106e))
* video and showcase styling ([5c00dba](https://github.com/wheelroom/wheelroom/commit/5c00dba3371a7af3896da12aba93eb4f976a5256))



## @wheelroom/nextjs-starter 6.24.2

### [6.24.2](https://github.com/wheelroom/wheelroom/compare/6.24.1...6.24.2) (2021-06-10)



## @wheelroom/any 6.24.2

### [6.24.2](https://github.com/wheelroom/wheelroom/compare/6.24.1...6.24.2) (2021-06-10)


### Commits

* only allow react v17 ([2714826](https://github.com/wheelroom/wheelroom/commit/2714826a0de046e3501370b08c7f8edd9993bbea))


# Release 6.24.1

## @wheelroom/make 6.24.1

### [6.24.1](https://github.com/wheelroom/wheelroom/compare/6.24.0...6.24.1) (2021-06-06)


### Bug Fixes

* only prefix with targetPackageName ([0c92e04](https://github.com/wheelroom/wheelroom/commit/0c92e041090d82dd800801c0b723dfdf773a9721))


# Release 6.24.0

## @wheelroom/make 6.24.0

## [6.24.0](https://github.com/wheelroom/wheelroom/compare/6.23.0...6.24.0) (2021-06-06)


### Features

* auto prefix package name with owner ([0a206db](https://github.com/wheelroom/wheelroom/commit/0a206db429a4bb46d97781610cad26da3f82b328))


# Release 6.23.0

## @wheelroom/make 6.23.0

## [6.23.0](https://github.com/wheelroom/wheelroom/compare/6.21.11...6.23.0) (2021-06-06)


### Features

* use customized commit types ([1525a7d](https://github.com/wheelroom/wheelroom/commit/1525a7d7db36b51ce54c71609a29a6af9c580e62))


### Commits

* add conventional-changelog-conventionalcommits preset ([8e2a88e](https://github.com/wheelroom/wheelroom/commit/8e2a88e5ea9886ec8ee4f347f123f6534b4be9e8))
* add templates ([006e7bd](https://github.com/wheelroom/wheelroom/commit/006e7bdd28ab95bee7937419cbf31af815f5da13))
* function def to arrow ([546cdf0](https://github.com/wheelroom/wheelroom/commit/546cdf0dd17728378aa42f0ca81b9d99c1ee0d00))


# Release 6.22.0

## @wheelroom/make 6.22.0

## [6.22.0](https://github.com/wheelroom/wheelroom/compare/6.21.11...6.22.0) (2021-06-06)


### Features

* use customized commit types ([1525a7d](https://github.com/wheelroom/wheelroom/commit/1525a7d7db36b51ce54c71609a29a6af9c580e62))


### Commits

* add conventional-changelog-conventionalcommits preset ([8e2a88e](https://github.com/wheelroom/wheelroom/commit/8e2a88e5ea9886ec8ee4f347f123f6534b4be9e8))
* function def to arrow ([546cdf0](https://github.com/wheelroom/wheelroom/commit/546cdf0dd17728378aa42f0ca81b9d99c1ee0d00))


# Release 6.21.11

## @wheelroom/make 6.21.11

## [6.21.11](https://github.com/wheelroom/wheelroom/compare/6.21.10...6.21.11) (2021-06-02)


### Bug Fixes

* Add 'will not publish private package' message ([df47644](https://github.com/wheelroom/wheelroom/commit/df476441e8a0c0413106730b635678d92e389077))
* remove tslib peer dependency ([7638fb3](https://github.com/wheelroom/wheelroom/commit/7638fb33f05c300b421c8b523105a3188d262da4))




# Release 6.21.10

## @wheelroom/wheelroom-io 6.21.10

## [6.21.10](https://github.com/wheelroom/wheelroom/compare/6.21.9...6.21.10) (2021-05-30)


### Bug Fixes

* rollup config ([dd9acfd](https://github.com/wheelroom/wheelroom/commit/dd9acfdfe20edb6daa0da996fa2b9b24fd87d0f8))





## @wheelroom/nextjs-starter 6.21.10

## [6.21.10](https://github.com/wheelroom/wheelroom/compare/6.21.9...6.21.10) (2021-05-30)





## @wheelroom/any 6.21.10

## [6.21.10](https://github.com/wheelroom/wheelroom/compare/6.21.9...6.21.10) (2021-05-30)


### Bug Fixes

* rollup config ([dd9acfd](https://github.com/wheelroom/wheelroom/commit/dd9acfdfe20edb6daa0da996fa2b9b24fd87d0f8))




# Release 6.21.9

## @wheelroom/wheelroom-io 6.21.9

## [6.21.9](https://github.com/wheelroom/wheelroom/compare/6.21.8...6.21.9) (2021-05-28)





## @wheelroom/nextjs-starter 6.21.9

## [6.21.9](https://github.com/wheelroom/wheelroom/compare/6.21.8...6.21.9) (2021-05-28)





## @wheelroom/any 6.21.9

## [6.21.9](https://github.com/wheelroom/wheelroom/compare/6.21.8...6.21.9) (2021-05-28)




# Release 6.21.8

## @wheelroom/wheelroom-io 6.21.8

## [6.21.8](https://github.com/wheelroom/wheelroom/compare/6.21.7...6.21.8) (2021-05-28)





## @wheelroom/nextjs-starter 6.21.8

## [6.21.8](https://github.com/wheelroom/wheelroom/compare/6.21.7...6.21.8) (2021-05-28)





## @wheelroom/any 6.21.8

## [6.21.8](https://github.com/wheelroom/wheelroom/compare/6.21.7...6.21.8) (2021-05-28)




# Release 6.21.7

## @wheelroom/wheelroom-io 6.21.7

## [6.21.7](https://github.com/wheelroom/wheelroom/compare/6.21.6...6.21.7) (2021-05-27)





## @wheelroom/nextjs-starter 6.21.7

## [6.21.7](https://github.com/wheelroom/wheelroom/compare/6.21.6...6.21.7) (2021-05-27)





## @wheelroom/any 6.21.7

## [6.21.7](https://github.com/wheelroom/wheelroom/compare/6.21.6...6.21.7) (2021-05-27)




# Release 6.21.6

## @wheelroom/nextjs-starter 6.21.6

## [6.21.6](https://github.com/wheelroom/wheelroom/compare/6.21.5...6.21.6) (2021-05-27)





## @wheelroom/wheelroom-io 6.21.6

## [6.21.6](https://github.com/wheelroom/wheelroom/compare/6.21.5...6.21.6) (2021-05-27)





## @wheelroom/any 6.21.6

## [6.21.6](https://github.com/wheelroom/wheelroom/compare/6.21.5...6.21.6) (2021-05-27)




# Release 6.21.5

## @wheelroom/css-theme 6.21.5

## [6.21.5](https://github.com/wheelroom/wheelroom/compare/6.21.4...6.21.5) (2021-05-27)




# Release 6.21.4

## @wheelroom/wheelroom-io 6.21.4

## [6.21.4](https://github.com/wheelroom/wheelroom/compare/6.21.3...6.21.4) (2021-05-27)





## @wheelroom/nextjs-starter 6.21.4

## [6.21.4](https://github.com/wheelroom/wheelroom/compare/6.21.3...6.21.4) (2021-05-27)





## @wheelroom/any 6.21.4

## [6.21.4](https://github.com/wheelroom/wheelroom/compare/6.21.3...6.21.4) (2021-05-27)




# Release 6.21.3

## @wheelroom/make 6.21.3

## [6.21.3](https://github.com/wheelroom/wheelroom/compare/6.21.2...6.21.3) (2021-05-27)


### Bug Fixes

* package.json exports bug ([145f3f2](https://github.com/wheelroom/wheelroom/commit/145f3f2d6cc0164e55ec14c292719e4397bfe25f))




# Release 6.21.2

## @wheelroom/css-theme 6.21.2

## [6.21.2](https://github.com/wheelroom/wheelroom/compare/6.21.1...6.21.2) (2021-05-27)




# Release 6.21.1

## @wheelroom/make 6.21.1

## [6.21.1](https://github.com/wheelroom/wheelroom/compare/6.21.0...6.21.1) (2021-05-26)


### Bug Fixes

* check for valid github token ([150eb93](https://github.com/wheelroom/wheelroom/commit/150eb9329243a9b47a0d6e0bb06351ea39ee66f9))




# Release 6.21.0

## @wheelroom/make 6.21.0

# [6.21.0](https://github.com/wheelroom/wheelroom/compare/6.20.5...6.21.0) (2021-05-26)


### Features

* add github permission level ([974657c](https://github.com/wheelroom/wheelroom/commit/974657c8b0eed98b1edc52ccb1880617f439c3da))




# Release 6.20.5

## @wheelroom/wheelroom-io 6.20.5

## [6.20.5](https://github.com/wheelroom/wheelroom/compare/6.20.4...6.20.5) (2021-05-26)





## @wheelroom/nextjs-starter 6.20.5

## [6.20.5](https://github.com/wheelroom/wheelroom/compare/6.20.4...6.20.5) (2021-05-26)





## @wheelroom/any 6.20.5

## [6.20.5](https://github.com/wheelroom/wheelroom/compare/6.20.4...6.20.5) (2021-05-26)




# Release 6.20.4

## @wheelroom/nextjs-starter 6.20.4

## [6.20.4](https://github.com/wheelroom/wheelroom/compare/6.20.3...6.20.4) (2021-05-26)





## @wheelroom/wheelroom-io 6.20.4

## [6.20.4](https://github.com/wheelroom/wheelroom/compare/6.20.3...6.20.4) (2021-05-26)


### Features

* add feather icon ([d424334](https://github.com/wheelroom/wheelroom/commit/d4243342601e4e86aefb94191e8de74592fe8961))
* GlobalsProvider for passing globals to wheelroom components ([f26274e](https://github.com/wheelroom/wheelroom/commit/f26274e7c51610a9a038fda397b77a5f1efd458a))





## @wheelroom/any 6.20.4

## [6.20.4](https://github.com/wheelroom/wheelroom/compare/6.20.3...6.20.4) (2021-05-26)




# Release 6.20.3

## @wheelroom/css-theme 6.20.3

## [6.20.3](https://github.com/wheelroom/wheelroom/compare/6.20.2...6.20.3) (2021-05-20)




# Release 6.20.2

## @wheelroom/make 6.20.2

## [6.20.2](https://github.com/wheelroom/wheelroom/compare/6.20.1...6.20.2) (2021-05-04)


### Bug Fixes

* add npm dependencies for make ([312c772](https://github.com/wheelroom/wheelroom/commit/312c77210396f6a4e50a0a8657f87159c89957a2))




# Release 6.20.1

## @wheelroom/make 6.20.1

## [6.20.1](https://github.com/wheelroom/wheelroom/compare/6.20.0...6.20.1) (2021-05-04)


### Bug Fixes

* commit root changelog and release ([d99dccb](https://github.com/wheelroom/wheelroom/commit/d99dccbbafda3e95886e2dd75d4195eda5d51ba3))




# Release 6.20.0

## @wheelroom/make 6.20.0

# [6.20.0](https://github.com/wheelroom/wheelroom/compare/v6.19.2...v6.20.0) (2021-05-04)


### Bug Fixes

* set default confirm to yes ([e7f75a2](https://github.com/wheelroom/wheelroom/commit/e7f75a2f7c73251449957f8aa19ba1eeab8b2403))
* show actual packages that will change ([4842be0](https://github.com/wheelroom/wheelroom/commit/4842be02533ccf139097c036c1d381a7a894134c))


### Features

* confirm before doing anything ([44fffef](https://github.com/wheelroom/wheelroom/commit/44fffef91485c0de004a44f339fa2a6c0f54567f))
* root changelog and release ([e54ad16](https://github.com/wheelroom/wheelroom/commit/e54ad162690b2bf634d2404e3322595be8e5137c))
* update changelog of all packages ([6219f18](https://github.com/wheelroom/wheelroom/commit/6219f18963301be9a73de23bc519dea66bc7b755))
