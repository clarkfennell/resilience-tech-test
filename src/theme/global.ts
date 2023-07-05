'use client'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    html, 
    body {
        background-color: #242222;
        color: #FFF;
        font-family: 'Century Gothic', sans-serif;
        font-size: 16px;
        margin: 0.5rem;
        max-height: calc(100vh - 5rem);
        overflow: hidden;
        padding: 0;
    }

    h1, h2, h3, p {
        margin: 0;
    }

    ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
`
