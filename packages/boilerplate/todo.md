# Todo for refactor/themes branch

## Testing

- Test Scroll Spy refactor
- Check if all modules have consistent exports in index.ts

## Theme switcher

- How to update model with themeIds?

## Styling

- Remove styling from modules (presets)
- Make style trees consistent (container, wrapper, etc)
- How to handle common styling like topicPreset in boilerplate theme

## Variations of variations

- What to do with ncss postfixes like nscs-header, ncss-footer
- What to do with topicSection variants of variants like card and cardShadow

### Proposal

- The ncss-header soution is not a good idea because it is hard to check with
  Typescript
- topicInfo/cards and topicInfo/shadowCards is a good way of working
- For relative small style tree switches we could:
  - besides ncss: {}, allow ncss: [{}, {}, ...]
  - this is easy to check with TS and not verbose
  - problem is that the ncss objects in the array do not have a name
  - add wrName to ncss object?
  - or ...?

# Docs

- Add comments to files in the boilerplate
- Legacy PageSection model, remove PageSection ref in sections.ts
