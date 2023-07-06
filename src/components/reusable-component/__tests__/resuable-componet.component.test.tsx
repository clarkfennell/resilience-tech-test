import React from 'react'
import { ThemeProvider } from 'styled-components'
import { render, screen } from '@testing-library/react'
import { ReusableComponent, ReusableComponentTypes } from '@components/reusable-component/reusable-component.component'
import { defaultThemeConfig } from '@lib/theme-provider'

describe('Dashboard: Component', () => {
 beforeEach(() => {
  jest.resetModules()
 })

 const Component = (props: ReusableComponentTypes) => (
  <ThemeProvider theme={defaultThemeConfig}>
   <ReusableComponent {...props} />
  </ThemeProvider>
 )

 it('should render with all the data', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.getByTestId('reusable-component')).toBeDefined()
 })

 it('should not render the name component when it is not defined', () => {
  const investment = {
   id: 1,
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('name')).toBeNull()
 })

 it('should not render previousNames component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('previousName')).toBeNull()
 })

 it('should not render description component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('description')).toBeNull()
 })

 it('should not render foundedYear component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('foundedYear')).toBeNull()
 })

 it('should not render headquarters component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('headquarters')).toBeNull()
 })

 it('should not render revenue component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('revenue')).toBeNull()
 })

 it('should not render valuation component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   investmentValue: 1,
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('valuation')).toBeNull()
 })

 it('should not render investmentValue component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   status: 'test',
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('investmentValue')).toBeNull()
 })

 it('should not render status component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   sector: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('status')).toBeNull()
 })

 it('should not render sector component when it is not defined', () => {
  const investment = {
   id: 1,
   name: 'test',
   previousNames: ['test1', 'test2'],
   description: 'test',
   foundedYear: 2021,
   headquarters: 'test',
   revenue: 'test',
   valuation: 'test',
   investmentValue: 1,
   status: 'test',
   createdDate: 'test',
   updatedDate: 'test',
  }

  render(<Component investment={investment} />)

  expect(screen.queryByTestId('sector')).toBeNull()
 })
})
