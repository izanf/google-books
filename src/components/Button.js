import styled from 'styled-components'

export default styled.button`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  background: ${({ theme }) => theme.Colors.silver};
  color: ${({ theme }) => theme.Colors.black};
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => `${theme.Spacing.average} ${theme.Spacing.medium}`};
  cursor: pointer;
`
