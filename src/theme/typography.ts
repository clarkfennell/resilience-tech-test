import styled, { css } from 'styled-components'

export const heading1 = css`
 font-family: 'Lufga Bold';
 font-size: 3rem;
 line-height: 3rem;
 margin: 0;
 padding: 0;
`

export const heading2 = css`
 font-family: 'Lufga';
 font-size: 2.5rem;
 line-height: 2.5rem;
 margin: 0;
 padding: 0;
`

export const heading3 = css`
 font-family: 'Lufga Thin';
 font-size: 2rem;
 line-height: 2rem;
 margin: 0;
 padding: 0;
`

export const paragraphLarge = css`
 font-family: 'Century Gothic';
 font-size: 1.5rem;
 line-height: 1.5rem;
 margin: 0;
 padding: 0;
`

export const paragraph = css`
 font-family: 'Century Gothic';
 font-size: 1rem;
 line-height: 1rem;
 margin: 0;
 padding: 0;
`

export const paragraphSmall = css`
 font-family: 'Century Gothic';
 font-size: 0.75rem;
 line-height: 0.75rem;
 margin: 0;
 padding: 0;
`

export const H1 = styled.h1`
 ${heading1}
`

export const H2 = styled.h2`
 ${heading2}
`

export const H3 = styled.h3`
 ${heading3}
`

export const ParagraphLarge = styled.p`
 ${paragraphLarge}
`

export const Paragraph = styled.p`
 ${paragraph}
`

export const ParagraphSmall = styled.p`
 ${paragraphSmall}
`
