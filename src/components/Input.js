import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Label = styled.label``

const InputRAW = styled.input``

const Input = ({ id, label, value, onChange }) => (
  <Container>
    <Label htmlFor={id}>{label}</Label>
    <InputRAW id={id} value={value} onChange={onChange} />
  </Container>
)

export default Input
