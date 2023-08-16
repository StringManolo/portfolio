import { useLanguage } from './LanguageContext';

import styles from './TranslationButton.module.sass';

const TranslationButton = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'es' : 'en');
  }

  const showOpositeLanguage = (lang: string) => {
    return (lang === 'en' ? 'es' : 'en').toUpperCase();
  }
  return (
    <button className={styles['translation-button']} onClick={toggleLanguage}>{showOpositeLanguage(language)}</button>
  )
}

export default TranslationButton;
