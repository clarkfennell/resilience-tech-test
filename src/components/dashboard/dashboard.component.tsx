import * as S from './dashboard.styles'

import { investments } from '@data/data'
import { ReusableComponent } from '@components/reusable-component/reusable-component.component'

export const DashBoard = () => {
 return (
  <S.Container>
   <S.Header>
    <S.Title>Dashboard</S.Title>
   </S.Header>
   <S.Content>
    {investments ? (
     investments.map((investment) => (
      <S.Investment key={investment.id}>
       <ReusableComponent investment={investment && investment} />
      </S.Investment>
     ))
    ) : (
     <S.Investment>
      <S.Info>No investments found</S.Info>
     </S.Investment>
    )}
   </S.Content>
  </S.Container>
 )
}
