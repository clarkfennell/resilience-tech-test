import 'intersection-observer'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { DashBoard } from '@components/dashboard/dashboard.component'
import { defaultThemeConfig } from '@lib/theme-provider'

describe('Dashboard: Component', () => {
 beforeEach(() => {
  jest.resetModules()
 })

 const Component = () => (
  <ThemeProvider theme={defaultThemeConfig}>
   <DashBoard />
  </ThemeProvider>
 )

 it('renders without errors', () => {
  jest.mock('@data/data', () => ({
   investments: undefined,
  }))
  render(<Component />)

  expect(screen.getByTestId('dashboard')).toBeDefined()
 })

 it('renders the correct number of investments', () => {
  jest.mock('@data/data', () => ({
   investments: [
    {
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
   ],
  }))

  render(<Component />)

  expect(screen.getByTestId('dashboard')).toBeDefined()
  expect(screen.getAllByTestId('investments').length).toBe(1)
 })

 it('renders no investments found when no investments are passed', () => {
  jest.mock('@data/data', () => ({
   investments: undefined,
  }))
  render(<Component />)

  expect(screen.getByTestId('dashboard')).toBeDefined()
  expect(screen.getByText('No investments found')).toBeDefined()
 })
})
