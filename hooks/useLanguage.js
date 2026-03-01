import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

export function useLanguage() {
  const router = useRouter()
  const { t } = useTranslation('common')
  
  const currentLocale = router.locale || 'cs'
  const isCzech = currentLocale === 'cs'
  const isEnglish = currentLocale === 'en'
  
  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale })
  }
  
  const switchToCzech = () => changeLanguage('cs')
  const switchToEnglish = () => changeLanguage('en')
  
  return {
    t,
    currentLocale,
    isCzech,
    isEnglish,
    changeLanguage,
    switchToCzech,
    switchToEnglish,
  }
}