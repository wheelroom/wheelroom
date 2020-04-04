# Core

Files in this folder are overwritten with each boilerplate update.

## Displays and pageSection variants

One of the models in `src/models` is the pageSection component. This
models has a variation field. This field is used by the editor to set how
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

The React models used to render a variation are called displays.

## Elements

Elements are the most fundamental parts of the boilerplate. Each element returns
a html element like `<image>`, `<div>`, `<p>` or `<h1>`.

## Lib

Common functionality like utility and library methods are located here.

## Sections

Sections contain the logic used to render page sections. Including landmark logic.

## Views

Where displays represent the React models for the pageSection component, the
React models located here represent all other models in
`src/models`.
