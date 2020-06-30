# Wheelroom

Files in this folder are overwritten with each boilerplate update.

## Global

Things global to the boilerplate. Like reset styling that appears on the body
element.

## Lib

Common functionality like utility and library methods are located here.

## Parsers

Some fields need parsing. Converting new lines to `<br />` elements or parsing a
markdown table to the proper HTML.

## Sections

Section views contain the logic used to render page sections. Including landmark
logic.

## Svg

Contains the boilerplate icon set. Custom svg's can be added to `/src/svg/figma`

Use these commands to convert SVG files into a React Components.

```bash
npm run svgr:feather
```

```bash
npm run svgr:figma
```

## Theme

The core section of this boilerplate. Full site styling can be changed here.
Copy the default theme and create your own. A new theme is used by adding it to
the page section variations in `/src/models/pag-section`.

## Wheels

Wheels are HTML structures that are styled by using a tree of style objects.
