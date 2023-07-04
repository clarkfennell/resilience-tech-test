'use client'
import { ReactNode } from 'react'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

import * as colors from '@theme/colors'
import * as fonts from '@theme/fonts'

export const defaultThemeConfig = {
 fonts,
 colors,
}

export const ThemeProvider = ({ children }: { children: ReactNode; theme?: DefaultTheme }) => {
 const theme: DefaultTheme = {
  ...defaultThemeConfig,
 }

 return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
}
