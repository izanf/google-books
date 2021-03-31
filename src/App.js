import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import './assets/css/reset.css'

import theme from './theme'
import store from './store'

import Routes from './routes'

import GlobalStyle from './utils/globalStyles'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  )
}

export default App
