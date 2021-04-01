import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import theme from '../../theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.Colors.black};
  padding: ${({ theme }) => `${theme.Spacing.medium} ${theme.Spacing.xxxlarge}`};

  svg {
    cursor: pointer;
  }
`

const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  color: ${({ theme }) => theme.Colors.white};
  margin-left: ${({ theme }) => theme.Spacing.medium};
`

const Header = ({ title }) => {
  const history = useHistory()

  return (
    <Container>
      <FontAwesomeIcon
        icon={faArrowLeft}
        color={theme.Colors.white}
        onClick={history.goBack}
      />
      <Title>{title}</Title>
    </Container>
  )
}

export default Header
