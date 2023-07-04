'use client'
import styled from 'styled-components'

import { H3 } from '@theme/typography'

export const Container = styled.div`
 align-items: center;
 background-color: ${({ theme }) => theme.colors.colors.black};
 display: flex;
 flex-direction: column;
 height: auto;
 justify-content: center;
 margin: 0 1rem 1rem;
 scrollbar-color: ${({ theme }) => theme.colors.colors.light_grey} ${({ theme }) => theme.colors.colors.dark_grey};
 scrollbar-width: thin;

 ::-webkit-scrollbar {
  width: 0.25rem;
 }

 ::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.colors.aerospace_charcoal};
 }

 ::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.colors.blue};
  box-shadow: 0 -100vh 0 100vh ${({ theme }) => theme.colors.colors.blue};
 }
`
export const Header = styled.div`
 align-items: center;
 border-bottom: 0.125rem solid ${({ theme }) => theme.colors.colors.green};
 background-color: ${({ theme }) => theme.colors.colors.transparent};
 display: flex;
 flex-direction: row;
 justify-content: center;
 width: 100%;
`

export const Title = styled(H3)`
 color: ${({ theme }) => theme.colors.colors.white};
 font-size: 1.5rem;
 padding: 0.5rem 0;
`

export const Content = styled.div`
 align-items: flex-start;
 background-color: ${({ theme }) => theme.colors.colors.dark_grey};
 border-radius: 0 0 0.25rem 0.25rem;
 color: ${({ theme }) => theme.colors.colors.black};
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 max-height: 80vh;
 overflow-y: scroll;
 width: -webkit-fill-available;

 .fade-wrapper {
  pointer-events: all;
  width: 100%;
 }
`
export const Investment = styled.div`
 align-items: flex-start;
 background-color: ${({ theme }) => theme.colors.colors.white};
 border-radius: 0.25rem;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 margin: 0.5rem 0.5rem 0;
 height: auto;
 width: -webkit-fill-available;

 &:last-of-type {
  margin-bottom: 0.5rem;
 }
`

export const Info = styled.div``
