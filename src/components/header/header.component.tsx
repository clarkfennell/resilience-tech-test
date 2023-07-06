'use client'
import * as S from './header.styles'

export const Header = () => {
 return (
  <S.Container data-testid="header">
   <S.Title>Resilience Tech Test</S.Title>
   <S.SubTitle>by Clark Fennell</S.SubTitle>
  </S.Container>
 )
}
