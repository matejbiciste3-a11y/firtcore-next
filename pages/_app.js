import '@/styles/globals.css'
import { ThemeProvider } from '@/hooks/useTheme'
import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

function App({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <ThemeProvider>
      <Component {...pageProps} key={router.locale} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)