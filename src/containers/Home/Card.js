import React from 'react'
import styled from 'styled-components'

import { Thumb } from '../../components'

const Container = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    p {
      opacity: 1;
    }
  }
`

const Title = styled.p`
  opacity: 0;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  width: calc(100% - 2rem);
  position: absolute;
  bottom: 0;
  padding: 1rem;
  color: ${({ theme }) => theme.Colors.white};
  text-shadow: 0 0 4px rgba(0, 0, 0, .5);
  background: linear-gradient(0deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.1) 100%);
  transition: all ease-in-out .2s;
`

const Card = ({ url, title, ...rest }) => (
  <Container {...rest}>
    <Thumb url={url} height="300px" />
    <Title>{title}</Title>
  </Container>
)

export default Card