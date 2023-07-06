'use client'
import Image from 'next/image'
import { useState } from 'react'

import * as S from './reusable-component.styles'

export type ReusableComponentTypes = {
 investment: {
  id?: number
  name?: string
  previousNames?: string[]
  description?: string
  foundedYear?: number
  headquarters?: string
  revenue?: string
  valuation?: string
  investmentValue?: number
  status?: string
  sector?: string
  createdDate?: string
  updatedDate?: string
 }
}

export const ReusableComponent = ({ investment }: ReusableComponentTypes) => {
 const [showToolTip, setShowToolTip] = useState(false)
 const [showDetails, setShowDetails] = useState(false)
 const [hoverDetails, setHoverDetails] = useState(false)
 return (
  <S.ColorWrap hoverDetails={hoverDetails} sector={investment.sector} data-testid="reusable-component">
   <S.Container>
    <S.WrapperTop>
     <S.SectorColor sector={investment.sector} />
     <S.TitleWrapper>
      <S.TitleTop>
       {investment.name && <S.Title data-testid="name">{investment.name}</S.Title>}
       {investment.previousNames && (
        <>
         <S.ToolTip data-testid="tooltip">
          <Image
           src={'/information.png'}
           alt="Previous Names"
           width="16"
           height="16"
           onMouseOver={() => setShowToolTip(true)}
           onMouseOut={() => setShowToolTip(false)}
          />
          <S.ToolTipText showToolTip={showToolTip}>
           <S.ToolTipTextGroup>
            Previous Names:
            {investment.previousNames.map((name, index) => (
             <S.PreviousName key={index}>
              {name}
              {investment.previousNames && index === investment.previousNames.length - 1 ? '' : ','}
             </S.PreviousName>
            ))}
           </S.ToolTipTextGroup>
          </S.ToolTipText>
         </S.ToolTip>
        </>
       )}
      </S.TitleTop>
      {investment.sector && <S.Sector data-testid="sector">{investment.sector}</S.Sector>}
     </S.TitleWrapper>
     <S.Details
      onClick={() => setShowDetails(!showDetails)}
      onMouseOver={() => setHoverDetails(true)}
      onMouseOut={() => setHoverDetails(false)}
      hoverDetails={hoverDetails}>
      Details
     </S.Details>
    </S.WrapperTop>
    <S.WrapperBottom showDetails={showDetails} hoverDetails={hoverDetails}>
     <S.InfoWrapper>
      {investment.description && (
       <S.Info data-testid="description">
        <span>Description:</span> {investment.description}
       </S.Info>
      )}
      {investment.headquarters && (
       <S.Info data-testid="headquarters">
        <span>Location:</span> {investment.headquarters}
       </S.Info>
      )}
      {investment.foundedYear && (
       <S.Info data-testid="foundedYear">
        <span>Founded in:</span> {investment.foundedYear}
       </S.Info>
      )}
      {investment.revenue && (
       <S.Info data-testid="revenue">
        <span>Revenue:</span> {investment.revenue}
       </S.Info>
      )}
      {investment.valuation && (
       <S.Info data-testid="valuation">
        <span>Valuation:</span> {investment.valuation}
       </S.Info>
      )}
      {investment.investmentValue && (
       <S.Info data-testid="investmentValue">
        <span>Investment Value:</span> {investment.investmentValue}
       </S.Info>
      )}
      {investment.status && (
       <S.Info data-testid="status">
        <span>Status:</span> {investment.status}
       </S.Info>
      )}
     </S.InfoWrapper>
    </S.WrapperBottom>
   </S.Container>
  </S.ColorWrap>
 )
}
