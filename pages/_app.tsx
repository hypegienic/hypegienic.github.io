import * as React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import {Theme, ThemeProvider, createTheme} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Favicon from '../src/components/favicon'
import Import from '../src/components/import'

const theme:Theme = createTheme({
  palette: {
    type: 'light',
    text: {
      primary: 'rgb(34, 39, 51)',
      secondary: 'rgb(255, 255, 255)'
    },
    primary: {
      main: 'rgb(0, 181, 242)',
      contrastText: 'white'
    },
    background: {
      paper: 'rgb(238, 233, 221)'
    }
  },
  typography: {
    fontFamily: ['Arimo', 'sans-serif'].join(','),
    h1: {fontWeight:800},
    h2: {fontWeight:800},
    h3: {fontWeight:800},
    h4: {fontWeight:800},
    allVariants: {
      lineHeight: 1.2
    }
  }
})
const App:React.FC<AppProps<any>> = (props) => {

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles?.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }

    window['dataLayer'] = window['dataLayer'] || []
    const gtag = (...argument:any[]) => {
      window['dataLayer'].push(argument)
    }
    gtag('js', new Date())
    gtag('config', 'UA-219608447-1')
  }, [])

  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8'/>
        <meta name='viewport' id='viewport' content='initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,minimal-ui'/>

        <meta name='subject' content='hypegienic'/>
        <meta name='description' content='Powered by hypeguardian, premium shoe care specialists.'/>
        <meta name='keywords' content='hypegienic, hypeguardian, shoe, sneaker, care, washing, service'/>
        <meta name='copyright'content='hypegienic'/>
        <meta name='language' content='EN'/>

        <meta name='og:title' content='hypegienic'/>
        <meta name='og:type' content='website'/>
        <meta name='og:url' content='https://hypegienic.github.io/'/>
        <meta name='og:image' content='https://github.com/hypegienic/hypegienic.github.io/raw/main/src/asset/img/hypegienic-logo.png'/>
        <meta name='og:site_name' content='hypegienic'/>
        <meta name='og:description' content='Powered by hypeguardian, premium shoe care specialists.'/>

        <title>{'hy{pe}gienic - shoe care specialists'}</title>
      </Head>
      <Favicon/>
      <Import/>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=UA-219608447-1'/>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
type AppProps<T> = {
  Component: React.ComponentClass<T>
  pageProps: T
}
export default App
