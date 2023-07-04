import * as S from './dashboard.styles'

import { investments } from '@data/data'

export const DashBoard = () => {
 return (
  <S.Container>
   <S.Header>
    <S.Title>Dashboard</S.Title>
   </S.Header>
   <S.Content>{investments && investments.map((investment) => investment.name)}</S.Content>
  </S.Container>
 )
}
