import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { ReusableComponent, ReusableComponentTypes } from '@components/reusable-component/reusable-component.component'
import { defaultThemeConfig } from '@lib/theme-provider'

describe('Dashboard: Component', () => {
 beforeEach(() => {
  jest.resetModules()
 })

 const investment = {
  investment: {
   id: 1,
   name: 'Acme Corp',
   previousNames: ['Acme Inc.', 'Acme Limited'],
   description: 'Manufacturing company specializing in explosive devices',
   foundedYear: 1960,
   headquarters: 'Los Angeles, CA',
   revenue: '$500M',
   valuation: '$1B',
   investmentValue: 2.5,
   status: 'Active',
   sector: 'Consumer Discretionary',
   createdDate: '2022-01-01',
   updatedDate: '2022-01-05',
  },
 }

 const Component = () => (
  <ThemeProvider theme={defaultThemeConfig}>
   <ReusableComponent {...investment} />
  </ThemeProvider>
 )

 it('should render with all the data', () => {
  render(<Component />)

  expect(screen.getByTestId('reusable-component')).toBeDefined()
 })
})
