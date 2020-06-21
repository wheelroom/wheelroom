# Todo for refactor/themes branch

## Todo testing

- Test Scroll Spy refactor
- Check if all modules have consistent exports in index.ts

## Todo styling

- Remove styling from modules (presets)
- Make style trees consistent (container, wrapper, etc)
- How to handle common styling like topicPreset in boilerplate theme

# Todo docs

- Add comments to files in the boilerplate
- Legacy PageSection model, remove PageSection ref in sections.ts

# Split up into actual npm modules

- Move files
- Create package json for all modules
- Update dependencies in all modules
- Change all imports to the new modules


# Questions for refactor/themes branch

## How to update the models with the themeIds defined in themes?

- Possible solution: Import themes from config and overwrite items property

## How to handle LARGE variations of variations like card and cardShadow

### Proposal: topicInfo/shadowCards

- Create a new variant for these trees
- Like topicSection/cards and topicSection/shadowCards
- Deep merge objects in theme to avoid duplicate styles

## How to handle SMALL ncss variations?

### Proposal: ncss-header

- The ncss-header solution is not a good idea because it is hard to check with
  Typescript

### Proposal: Array of ncss objects

- See: [todo-a.ts](./todo-a.ts)
- besides ncss: {}, allow ncss: [{}, {}, ...]
- this is easy to check with TS and not verbose
- problem is that the ncss objects in the array do not have a name
- add wrName to ncss object?

### Proposal: ncssGroup

- See: [todo-b.ts](./todo-b.ts)
- besides ncss: {}, allow ncssGroup
- this is easy to check with TS and not verbose
- solves problem of array, objects have a name
- does exactly what we need, group ncss variations
