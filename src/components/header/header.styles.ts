import styled from 'styled-components'

export const Container = styled.div`
 align-items: center;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 height: 5rem;
 margin-bottom: 0.5rem;
 text-align: center;

 @media (min-width: 768px) {
  margin-bottom: 0;
 }
`

export const Title = styled.h1`
 width: auto;
`

export const SubTitle = styled.p`
 width: auto;
`
