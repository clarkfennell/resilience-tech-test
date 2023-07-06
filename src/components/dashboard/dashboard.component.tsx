'use client'
import { Fade } from 'react-awesome-reveal'
import { ReusableComponent } from '@components/reusable-component/reusable-component.component'
import { investments } from '@data/data'
import * as S from './dashboard.styles'

export type DashboardTypes = {
 investments?: typeof investments
}

export const DashBoard = ({ investments }: DashboardTypes) => {
 return (
  <S.Container data-testid="dashboard">
   <S.Header>
    <S.Title>Dashboard</S.Title>
   </S.Header>
   <S.Content>
    {investments && investments !== [] && investments !== null ? (
     investments.map((investment) => (
      <Fade cascade key={investment.id} className="fade-wrapper">
       <S.Investment data-testid="investments">
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
