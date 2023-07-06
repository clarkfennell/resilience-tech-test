import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { Header } from '@components/header/header.component'
import { defaultThemeConfig } from '@lib/theme-provider'

describe('Header: Component', () => {
 const Component = () => (
  <ThemeProvider theme={defaultThemeConfig}>
   <Header />
  </ThemeProvider>
 )

 it('should render without errors', () => {
  render(<Component />)

  expect(screen.getByTestId('header')).toBeDefined()
  expect(screen.getByText('Resilience Tech Test')).toBeDefined()
  expect(screen.getByText('by Clark Fennell')).toBeDefined()
 })
})
