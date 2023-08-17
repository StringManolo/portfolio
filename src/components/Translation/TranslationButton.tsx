import { useLanguage } from './LanguageContext';
import { useEffect, useRef } from 'react';
import styles from './TranslationButton.module.sass';



const TranslationButton = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(language === 'en' ? 'es' : 'en');
  }

  const showOpositeLanguage = (lang: string) => {
    return (lang === 'en' ? 'es' : 'en').toUpperCase();
  }

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    function resizeContent() {
      const windowHeight = document.body.scrollHeight;
      //const contentHeight = content.clientHeight;

      //if (contentHeight < windowHeight) {
      // @ts-ignore
      content.style.height = windowHeight - 51 + 'px';
      //}
    }

    window.addEventListener('resize', resizeContent);
    resizeContent();

    return () => {
      window.removeEventListener('resize', resizeContent);
    };
  }, []);


  return (
    <div className={styles['translation-button-container']} ref={contentRef}>
      <button className={styles['translation-button']} onClick={toggleLanguage}>{showOpositeLanguage(language)}</button>
    </div>
  )
}

export default TranslationButton;
