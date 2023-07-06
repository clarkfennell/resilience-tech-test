import 'intersection-observer'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { DashBoard, DashboardTypes } from '@components/dashboard/dashboard.component'
import { defaultThemeConfig } from '@lib/theme-provider'

describe('Dashboard: Component', () => {
 beforeEach(() => {
  jest.mock('@data/data.ts', () => jest.fn())
 })

 const Component = (props: DashboardTypes) => {
  return (
   <ThemeProvider theme={defaultThemeConfig}>
    <DashBoard {...props} />
   </ThemeProvider>
  )
 }

 it('renders without errors', () => {
  const investments = [
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
  ]

  render(<Component investments={investments} />)
  expect(screen.getByTestId('dashboard')).toBeDefined()
 })

 it('renders the correct number of investments', () => {
  const investments = [
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
  ]

  render(<Component investments={investments} />)
  expect(screen.getByTestId('dashboard')).toBeDefined()
  expect(screen.getAllByTestId('investments')).toBeDefined()
  expect(screen.getAllByTestId('investments')).toHaveLength(1)
 })

 it('renders no investments component when data is empty', () => {
  const investments = null

  render(<Component investments={investments} />)
  expect(screen.getByTestId('dashboard')).toBeDefined()
  expect(screen.getAllByTestId('noInvestments')).toBeDefined()
  expect(screen.queryByText('No investments found')).toBeDefined()
 })
})
