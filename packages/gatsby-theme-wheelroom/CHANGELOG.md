# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.5](https://github.com/wheelroom/wheelroom/compare/gatsby-theme-wheelroom@4.0.4...gatsby-theme-wheelroom@4.0.5) (2020-03-26)

**Note:** Version bump only for package gatsby-theme-wheelroom





## [4.0.4](https://github.com/wheelroom/wheelroom/compare/gatsby-theme-wheelroom@4.0.3...gatsby-theme-wheelroom@4.0.4) (2020-03-21)


### Bug Fixes

* set exact semver ([e8e5ab6](https://github.com/wheelroom/wheelroom/commit/e8e5ab6a108adf60d9a247dd53e8f7b2bb6ae3f7))





## [4.0.3](https://github.com/wheelroom/wheelroom/compare/gatsby-theme-wheelroom@4.0.2...gatsby-theme-wheelroom@4.0.3) (2020-03-19)


### Bug Fixes

* exact versions ([4a8e0fe](https://github.com/wheelroom/wheelroom/commit/4a8e0fe6f841c9e6ab4fc2335b5ab0c4446da890))
* gitHead ([c9ac0bc](https://github.com/wheelroom/wheelroom/commit/c9ac0bccc309e7b615424a310f66bea27851aa3f))
* global replace [@jacco-meijer](https://github.com/jacco-meijer) with [@wheelroom](https://github.com/wheelroom) ([eac3c94](https://github.com/wheelroom/wheelroom/commit/eac3c949381a2a5ce2a7aa656f458681b680dc6c))
* homepage ([54f37c3](https://github.com/wheelroom/wheelroom/commit/54f37c32233d4cab3faf4d9311ec56faf2837ef4))
* issue url ([ed6af86](https://github.com/wheelroom/wheelroom/commit/ed6af864c251bcba2731ce3890c6c3a498d97cad))
* keywords ([fc45668](https://github.com/wheelroom/wheelroom/commit/fc456689bb0ad07a8f848ff962f48400e0afbcc1))
* npm refs ([e6ab718](https://github.com/wheelroom/wheelroom/commit/e6ab718a873361116950353de328502405a771cd))
* repo url ([ddad3cc](https://github.com/wheelroom/wheelroom/commit/ddad3cc6c861fb6ae9afce676e49e24c5a32d781))
* sync package versions ([860d0ff](https://github.com/wheelroom/wheelroom/commit/860d0ffe09d318c42d71351cd7f4ba7951e6b882))





## [4.0.2](https://github.com/jaccomeijer/wheelroom/compare/gatsby-theme-wheelroom@4.0.1...gatsby-theme-wheelroom@4.0.2) (2020-03-12)

**Note:** Version bump only for package gatsby-theme-wheelroom





## [4.0.1](https://github.com/jaccomeijer/wheelroom/compare/gatsby-theme-wheelroom@4.0.0...gatsby-theme-wheelroom@4.0.1) (2020-03-10)

**Note:** Version bump only for package gatsby-theme-wheelroom





# [4.0.0](https://github.com/jaccomeijer/wheelroom/compare/gatsby-theme-wheelroom@3.4.2...gatsby-theme-wheelroom@4.0.0) (2020-03-08)


### Features

* remove gatsby-config.js ([6f492e0](https://github.com/jaccomeijer/wheelroom/commit/6f492e0d70051fd5bbe140db429c9a51e8e5a4b5))


### BREAKING CHANGES

* gatsby-source-contenful was removed from theme. Projects that use this plugin now must configure the gatsby-source-contentful plugin. See plugin documentation.

plugins: [
  {
    options: cfConfig,
    resolve: 'gatsby-source-contentful',
  },
],



