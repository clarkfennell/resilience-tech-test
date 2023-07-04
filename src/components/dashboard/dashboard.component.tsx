import * as S from './dashboard.styles'

import { investments } from '@data/data'

export const DashBoard = () => {
 return (
  <S.Container>
   <S.Header>
    <S.Title>Dashboard</S.Title>
   </S.Header>
   <S.Content>
    {investments &&
     investments.map((investment) => (
      <S.Investment key={investment.id}>
       <S.Info>ID: {investment.id}</S.Info>
       <S.Info>Name: {investment.name}</S.Info>
       <S.Info>Previous Names: {investment.previousNames}</S.Info>
       <S.Info>Description: {investment.description}</S.Info>
       <S.Info>Year Founded: {investment.foundedYear}</S.Info>
       <S.Info>Headquarters: {investment.headquarters}</S.Info>
       <S.Info>Revenue: {investment.revenue}</S.Info>
       <S.Info>Valuation: {investment.valuation}</S.Info>
       <S.Info>Investment Value: {investment.investmentValue}</S.Info>
       <S.Info>Status: {investment.status}</S.Info>
       <S.Info>Sector: {investment.sector}</S.Info>
       <S.Info>Created Date: {investment.createdDate}</S.Info>
       <S.Info>Updated Date: {investment.updatedDate}</S.Info>
      </S.Investment>
     ))}
   </S.Content>
  </S.Container>
 )
}
