import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body {
    background: hsl(35, 45%, 95%);
    color: hsl(40, 40%, 20%);
    background: hsl(245, 25%, 5%);
    color: hsl(230, 15%, 75%);
}
`

export default () => <GlobalStyle />