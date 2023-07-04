import { createGlobalStyle } from 'styled-components'

export const CenturyGothic = createGlobalStyle`
    @font-face {
        font-family: 'Century Gothic';
        src: url('/assets/fonts/century-gothic.ttf') format('truetype');
             url('/assets/fonts/century-gothic.woff') format('woff');
             url('/assets/fonts/century-gothic.woff2') format('woff2');
             url('/assets/fonts/century-gothic.eot') format('embedded-opentype');
             url('/assets/fonts/century-gothic.svg') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`

export const Lufga = createGlobalStyle`
    @font-face {
        font-family: 'Lufga';
        src: url('/assets/fonts/lufga-regular.ttf') format('truetype');
             url('/assets/fonts/lufga-regular.woff') format('woff');
             url('/assets/fonts/lufga-regular.woff2') format('woff2');
             url('/assets/fonts/lufga-regular.eot') format('embedded-opentype');
             url('/assets/fonts/lufga-regular.svg') format('svg');
        font-weight: normal;
        font-style: normal;
    }
`

export const LufgaBold = createGlobalStyle`
    @font-face {
        font-family: 'Lufga Bold';
        src: url('/assets/fonts/lufga-bold.ttf') format('truetype');
                url('/assets/fonts/lufga-bold.woff') format('woff');
                url('/assets/fonts/lufga-bold.woff2') format('woff2');
                url('/assets/fonts/lufga-bold.eot') format('embedded-opentype');
                url('/assets/fonts/lufga-bold.svg') format('svg');
        font-weight: bold;
        font-style: normal;
    }
`

export const LufgaLight = createGlobalStyle`
    @font-face {
        font-family: 'Lufga Light';
        src: url('/assets/fonts/lufga-light.ttf') format('truetype');
                url('/assets/fonts/lufga-light.woff') format('woff');
                url('/assets/fonts/lufga-light.woff2') format('woff2');
                url('/assets/fonts/lufga-light.eot') format('embedded-opentype');
                url('/assets/fonts/lufga-light.svg') format('svg');
        font-weight: 300;
        font-style: normal;
    }
`
