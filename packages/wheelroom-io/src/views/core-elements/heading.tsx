/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'
import {
  heading1Style,
  heading2Style,
  heading3Style,
} from '../../styles/heading'

/**
 *
 * Optie A - Bestaand
 *
 * Heeft als nadeel dat je altijd zelf de heading stijl moet toevoegen. Dat gaat
 * prima, maar is in de praktijk wat omslachtig.
 *
 */

export const H1 = (props: any) => (
  <h1 css={emotionCss({ ncss: props.ncss })}>{props.children}</h1>
)

export const H2 = (props: any) => (
  <h2 css={emotionCss({ ncss: props.ncss })}>{props.children}</h2>
)

export const H3 = (props: any) => (
  <h3 css={emotionCss({ ncss: props.ncss })}>{props.children}</h3>
)

export const H4 = (props: any) => (
  <h4 css={emotionCss({ ncss: props.ncss })}>{props.children}</h4>
)

export const H5 = (props: any) => (
  <h5 css={emotionCss({ ncss: props.ncss })}>{props.children}</h5>
)

export const H6 = (props: any) => (
  <h6 css={emotionCss({ ncss: props.ncss })}>{props.children}</h6>
)

/**
 *
 * Optie B - Met createElement en is-element prop
 *
 * Heeft als nadeel dat je, net als bij de huidige implementatie, altijd zelf de
 * stijl moet toevoegen
 *
 */
export const Heading = (props: { ncss: any; children: any; is: string }) => {
  const style = { css: emotionCss({ ncss: props.ncss || {} }) }
  return jsx(props.is || 'h1', style, props.children)
}

export const H1B = (props: any) => <Heading {...props} is="h1" />
export const H2B = (props: any) => <Heading {...props} is="h2" />
export const H3B = (props: any) => <Heading {...props} is="h3" />

/**
 *
 * Optie C - Individueel en meteen stijl toevoegen
 *
 * Misschien wat verbose, maar wel de meest prettige oplossing omdat meteen de
 * juiste stijl kan worden meegegeven.
 *
 */
export const H1C = (props: any) => (
  <h1 css={emotionCss({ ncss: { ...heading1Style, ...props.ncss } })}>
    {props.children}
  </h1>
)

export const H2C = (props: any) => (
  <h2 css={emotionCss({ ncss: { ...heading2Style, ...props.ncss } })}>
    {props.children}
  </h2>
)

export const H3C = (props: any) => (
  <h3 css={emotionCss({ ncss: { ...heading3Style, ...props.ncss } })}>
    {props.children}
  </h3>
)
