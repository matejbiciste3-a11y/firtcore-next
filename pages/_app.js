import '@/styles/globals.css'
import { ThemeProvider } from '@/hooks/useTheme'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)