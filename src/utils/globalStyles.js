import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body, #root {
  height: 100%;
}

html {
  font-size: 16px;
}

body {
	background: ${({ theme }) => theme.Colors.gray};
}

strong {
  font-weight: bold;
}
`

export default GlobalStyle
