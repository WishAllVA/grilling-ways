import React, { useEffect } from 'react'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Theme from '../components/Theme/Theme'
import Navbar from '../components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])
  return (
    <React.Fragment>
      <Head>
        <title>Grilling Ways</title>
        <meta name="description" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp
