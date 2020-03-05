## [3.0.6](https://github.com/jaccomeijer/wheelroom/compare/v3.0.5...v3.0.6) (2020-03-05)


### Bug Fixes

* check for valid theme and config ([168f4cb](https://github.com/jaccomeijer/wheelroom/commit/168f4cb1efe23d74253465788b656aa536bdc621))



## [3.0.5](https://github.com/jaccomeijer/wheelroom/compare/v3.0.4...v3.0.5) (2020-03-05)


### Bug Fixes

* check for valid object ([479783c](https://github.com/jaccomeijer/wheelroom/commit/479783cb3905149cd05f3af8256ae54f0dbc12db))



## [3.0.4](https://github.com/jaccomeijer/wheelroom/compare/v3.0.3...v3.0.4) (2020-02-06)


### Bug Fixes

* github urls ([6053e6e](https://github.com/jaccomeijer/wheelroom/commit/6053e6e3051865be910a27f998986f09ef179df7))



## [3.0.3](https://github.com/jaccomeijer/wheelroom/compare/v3.0.2...v3.0.3) (2019-12-17)



## [3.0.2](https://github.com/jaccomeijer/wheelroom/compare/v3.0.1...v3.0.2) (2019-12-17)



## [3.0.1](https://github.com/jaccomeijer/wheelroom/compare/2a3e0b631dcaab52e61c598f2cea544297674229...v3.0.1) (2019-12-17)


### Bug Fixes

* errors because of better ts defs ([495f276](https://github.com/jaccomeijer/wheelroom/commit/495f276d3fced9281f9b77be68f27675d32eefff))
* handle propFromArray not being present in map ([f9484f8](https://github.com/jaccomeijer/wheelroom/commit/f9484f8f654d2edcf6ed4b56070d4a2d2bb06dc0))
* linter ([e7b01ab](https://github.com/jaccomeijer/wheelroom/commit/e7b01ab91e9088a54e3200cd6518fece71d80d5e))
* **styled-system:** add required modules ([2a3e0b6](https://github.com/jaccomeijer/wheelroom/commit/2a3e0b631dcaab52e61c598f2cea544297674229))


### Features

* Added selective interactive  overwrite ([29dcaa0](https://github.com/jaccomeijer/wheelroom/commit/29dcaa0e0e3d7cc483832ef532460c84e890f346))
* export config and theme types ([e7cfbfd](https://github.com/jaccomeijer/wheelroom/commit/e7cfbfd87400461ba8a7b75f1ddf40f991d52ee6))
* moved from wheelroom lerna multi repo into separate repo ([b3c1a6d](https://github.com/jaccomeijer/wheelroom/commit/b3c1a6d690b5ba47f751d2f338a1c9afdfdc6f09))
* new parameter format ([00156a2](https://github.com/jaccomeijer/wheelroom/commit/00156a231da930a0a146500a6a7a785cdaa00dd1))
* require ncss object for all styling ([b3f0809](https://github.com/jaccomeijer/wheelroom/commit/b3f0809649ccbbea123585a9cadf017538e479e8))


### BREAKING CHANGES

* root level styling not allowed anymore

Before: <Box m=2>...</Box>

After: <Box ncss={{m:2}}>...</Box>



