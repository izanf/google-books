import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

import theme from '../../theme'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.Spacing.small} ${({ theme }) => theme.Spacing.average};

  svg {
    cursor: pointer;
  }
`

const Label = styled.p`
  font-family: 'Rubik', sans-serif;
  color: ${({ theme }) => theme.Colors.white};
  margin-right: ${({ theme }) => theme.Spacing.small};
`

const Favorite = ({ id, favorites, onClick }) => {
  const isFavorite = favorites.find(item => item === id)

  return (
    <Container>
      <Label>Salvar nos favoritos: </Label>
      <FontAwesomeIcon
        icon={isFavorite ? fasHeart : farHeart}
        color={theme.Colors.fireEngine}
        onClick={() => onClick(id)}
      />
    </Container>
  )
}

export default Favorite
