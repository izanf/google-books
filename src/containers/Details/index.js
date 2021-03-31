import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../../components'

const Container = styled.div``

const Header = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.Colors.black};
  padding: ${({ theme }) => `${theme.Spacing.medium} ${theme.Spacing.xxxlarge}`};
`

const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  color: ${({ theme }) => theme.Colors.white};
  margin-left: ${({ theme }) => theme.Spacing.medium};
`

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
`

const Details = ({ location: { state: { data } } }) => {
  const history = useHistory()
  console.log('PPPPPP', data)

  return (
    <Container>
      <Header>
        <Button onClick={history.goBack}>Voltar</Button>
        <Title>{data.volumeInfo.title || ''}</Title>
      </Header>
      <Content>
        Conteudo aqui
      </Content>
    </Container>
  )
}

export default Details
