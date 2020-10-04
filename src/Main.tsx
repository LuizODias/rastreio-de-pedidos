import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import Routes from './routes'
import { global as GlobalStyle } from './core/assets/styles'
import { theme } from './core/constants'
import { store } from './core/lib'
import 'react-toastify/dist/ReactToastify.min.css'
import 'dotenv/config'

export default function Main() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <StylesProvider injectFirst>
            <Routes />
          </StylesProvider>
        </ThemeProvider>
      </Provider>
    </>
  )
}
