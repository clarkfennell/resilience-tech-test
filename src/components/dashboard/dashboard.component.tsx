'use client'
import { Fade } from 'react-awesome-reveal'

import { investments } from '@data/data'
import { ReusableComponent } from '@components/reusable-component/reusable-component.component'

import * as S from './dashboard.styles'

export const DashBoard = () => {
 return (
  <S.Container data-testid="dashboard">
   <S.Header>
    <S.Title>Dashboard</S.Title>
   </S.Header>
   <S.Content>
    {investments ? (
     investments.map((investment) => (
      <Fade cascade key={investment.id} className="fade-wrapper" data-testid="investments">
       <S.Investment>
        <ReusableComponent investment={investment && investment} />
       </S.Investment>
      </Fade>
     ))
    ) : (
     <S.Investment data-testid="noInvestments">
      <S.Info>No investments found</S.Info>
     </S.Investment>
    )}
   </S.Content>
  </S.Container>
 )
}
