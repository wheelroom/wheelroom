# Core

Files in this folder are overwritten with each boilerplate update.

## Displays and pageSection variants

One of the components in `src/components` is the pageSection component. This
components has a variation field. This field is used by the editor to set how
the page section is displayed.

These variations are supported by the boilerplate by default. Other variations
can be easily added.

- block
- card
- featured
- gallery
- headline
- hero
- image
- navigation
- quote
- text
- video

The React components used to render a variation are called displays.

## Elements

Elements are the most fundamental parts of the boilerplate. Each element returns
a html element like <image>, <div>, <p> or <h1>

## Lib

Common functionality like utility and library methods are located here.

## Sections

Sections contain the logic used to render page sections. Including landmark logic.

## Views

Where displays represent the React components for the pageSection component, the
React components located here represent all other components in
`src/components`.
