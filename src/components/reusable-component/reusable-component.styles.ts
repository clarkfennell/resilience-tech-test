'use client'
import styled, { DefaultTheme, css } from 'styled-components'
import { H3, ParagraphSmall } from '@theme/typography'

export const ColorWrap = styled.div<{ hoverDetails: boolean; sector?: string }>`
 background-color: ${({ theme }) => theme.colors.colors.transparent};
 border-radius: 0.25rem;
 color: ${({ theme }) => theme.colors.colors.black};
 height: auto;
 overflow: hidden;
 padding: 0.25rem;
 transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
 width: -webkit-fill-available;

 @media (min-width: 768px) {
  ${({ hoverDetails, sector, theme }) =>
   hoverDetails &&
   sector &&
   css`
    background-color: ${handleColourType(sector, theme)};
    ${TitleWrapper} {
     color: ${theme.colors.colors.white};
    }
   `}

  ${({ hoverDetails, sector, theme }) =>
   hoverDetails &&
   !sector &&
   css`
    background-color: ${theme.colors.colors.green};
    ${TitleWrapper} {
     color: ${theme.colors.colors.white};
    }
   `}
 }
`

export const Container = styled.div`
 align-items: flex-start;
 display: flex;
 flex-direction: column;
 height: auto;
 justify-content: flex-start;
 padding: 0.5rem 0.5rem 0;
 margin-bottom: -0.5rem;
 width: -webkit-fill-available;

 @media (min-width: 768px) {
  margin-bottom: 0;
  padding: 0.5rem 2rem;
 }
`

export const WrapperTop = styled.div`
 align-items: flex-start;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 position: relative;
 width: -webkit-fill-available;

 @media (min-width: 768px) {
  align-items: center;
  flex-direction: row;
 }
`

export const WrapperBottom = styled.div<{ showDetails: boolean; hoverDetails: boolean }>`
 align-items: center;
 color: ${({ theme }) => theme.colors.colors.black};
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 margin-bottom: 0.5rem;
 min-height: ${({ showDetails }) => (showDetails ? '10rem' : '0')};
 max-height: ${({ showDetails }) => (showDetails ? '20rem' : '0')};
 overflow: hidden;
 transition: min-height 0.5s ease-in-out, max-height 0.5s ease-in-out;
 width: -webkit-fill-available;

 @media (min-width: 768px) {
  margin-bottom: 0;
  max-height: ${({ showDetails }) => (showDetails ? '10rem' : '0')};
  color: ${({ hoverDetails, theme }) => (hoverDetails ? theme.colors.colors.white : theme.colors.colors.black)};
 }
`

export const TitleWrapper = styled.div``

export const TitleTop = styled.div`
 align-items: center;
 display: flex;
 flex-direction: row;
 justify-content: flex-start;
 margin-bottom: 0.25rem;
`

export const Title = styled(H3)`
 font-size: 1.25rem;
 letter-spacing: -0.5px;
 line-height: 1.25rem;
`

export const ToolTip = styled.div`
 display: none;
 height: 1rem;
 margin-left: 0.5rem;
 position: relative;
 width: 1rem;

 img {
  cursor: pointer;
 }

 @media (min-width: 768px) {
  display: flex;
 }
`

export const ToolTipText = styled.div<{ showToolTip: boolean }>`
 background-color: ${({ theme }) => theme.colors.colors.black};
 border-radius: 0.25rem;
 color: ${({ theme }) => theme.colors.colors.white};
 left: 2rem;
 opacity: ${({ showToolTip }) => (showToolTip ? '1' : '0')};
 padding: 1rem;
 position: absolute;
 transform: translateY(-50%);
 transition: opacity 0.5s ease-in-out;
 top: 90%;

 &:before {
  border-bottom: 0.5rem solid ${({ theme }) => theme.colors.colors.transparent};
  border-right: 0.5rem solid ${({ theme }) => theme.colors.colors.black};
  border-top: 0.5rem solid ${({ theme }) => theme.colors.colors.transparent};
  content: '';
  height: 0;
  position: absolute;
  right: 100%;
  top: 40%;
  transform: translateY(-50%);
  width: 0;
 }
`

export const ToolTipTextGroup = styled.ul`
 align-items: center;
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 white-space: nowrap;
`

export const PreviousName = styled.li`
 padding: 0 0.25rem;
 white-space: nowrap;
`

export const Sector = styled(ParagraphSmall)``

const handleColourType = (sector: string, theme: DefaultTheme) => {
 switch (sector) {
  case 'Agriculture':
   return theme.colors.colors.agriculture_yellow
  case 'Consumer Discretionary':
   return theme.colors.colors.consumer_pink
  case 'Environment & Renewables':
   return theme.colors.colors.environment_green
  case 'Financials':
   return theme.colors.colors.financials_purple
  case 'Healthcare':
   return theme.colors.colors.healthcare_orange
  case 'Information Technology':
   return theme.colors.colors.it_blue
  case '':
   return theme.colors.colors.green
  case typeof undefined:
   return theme.colors.colors.green
  case typeof null:
   return theme.colors.colors.green
  default:
   return theme.colors.colors.green
 }
}

export const SectorColor = styled.div<{ sector?: string }>`
 ${({ sector, theme }) =>
  sector
   ? `background-color: ` + handleColourType(sector, theme) + `;`
   : `background-color: ${theme.colors.colors.green};`}

 border-radius: 50%;
 height: 6rem;
 left: calc(100% - 1.5rem);
 position: absolute;
 width: 6rem;

 @media (min-width: 768px) {
  height: 2.5rem;
  left: unset;
  right: calc(100% + 1rem);
  width: 2.5rem;
 }
`

export const Details = styled.button<{ hoverDetails: boolean }>`
 align-items: center;
 background-color: ${({ theme }) => theme.colors.colors.transparent};
 border-radius: 2rem;
 border: 0.025rem solid ${({ theme }) => theme.colors.colors.red};
 color: ${({ theme }) => theme.colors.colors.red};
 cursor: pointer;
 display: flex;
 font-size: 1.25rem;
 height: auto;
 justify-content: center;
 letter-spacing: -0.5px;
 margin: 1rem 0;
 max-width: 5rem;
 padding: 0.5rem 4rem;
 transition: border-color 0.5s ease-in-out, color 0.5s ease-in-out;
 width: 100%;

 @media (min-width: 768px) {
  border: 0.025rem solid
   ${({ theme, hoverDetails }) => (hoverDetails ? theme.colors.colors.white : theme.colors.colors.red)};
  color: ${({ theme, hoverDetails }) => (hoverDetails ? theme.colors.colors.white : theme.colors.colors.red)};
  margin: 0;
  padding: 0.5rem 5rem;
 }
`

export const InfoWrapper = styled.div`
 display: flex;
 flex-direction: column;

 span {
  font-weight: 700;
 }
`

export const Info = styled.div``
