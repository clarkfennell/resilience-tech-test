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
 margin: 1rem auto;
 max-height: 75vw;
 max-width: 85vw;
 width: 100%;
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
 padding: 1rem;
`
