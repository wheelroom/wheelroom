# Add a new component

## Steps

New components are added in a few steps:

- Add the component and compile the new config
- Create the new model at Contentful
- Generate Graphql fragments and queries
- Create React boilerplate code
- Update the section list
- Restart Gatsby

## Add the component and compile the new config

Add a new component to
[config-components.ts](../../src/config/wheelroom/config-components.ts).

Compile config:

```bash
npm run compile-config
```

> **_NOTE:_** This runs: `tsc --project src/config/tsconfig.json`. It runs the
> typescript compiler with the settings in `src/config/tsconfig.ts`.

## Create the new model at Contentful

Add a single model to Contentful:

```bash
npm run wr:cm -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-models`. It sets the config and runs the `create-models`
> command added by
> [wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful).

## Create Graphql fragments and queries

Generate graphql for this new component:

```bash
npm run wr:cg -- --filter newComponent
```

> **_NOTE:_** This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-graphql gatsbyjs src/components`. It sets the config and runs
> the `create-graphql` command added by
> [wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer//wheelroom-plugin-graphql).
> The `gatsbyjs` template set is written to `src/components`.

## Create React boilerplate code

Generate boilerplate for the new component:

```bash
npm run wr:cb -- --filter newComponent
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-boilerplate react src/components`.
It sets the config and runs the `create-boilerplate` command added by
[wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-boilerplate).
The `react` template set is written to `src/components`.

## Update the section list

When you're adding a section you need to add it to the section list: [sections.tsx](../../src/sections/sections.tsx).

## Restart Gatsby

Kill the development server with `^C` and start it again:

```bash
npm run develop
```

## Next steps

- [Edit page template](./page-template.md)
- [Change default locale](./default-locale.md)
- [Add a new component](./add-new-component.md)
- [Auto fix with linter](./linter.md)

## More info

- [Getting started](../getting-started.md)
- [How it works](../how-it-works.md)
- [Roadmap](../roadmap.md)
