import spanish from './cvespa.json'
import english from './cveng.json'

const LANGUAGES = {
  SPANISH: 'es',
  ENGLISH: 'en'
}

export const getI18n = ({ currentLocale ='es' }: { currentLocale: string | undefined }) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.ENGLISH) return english
  return spanish
};
