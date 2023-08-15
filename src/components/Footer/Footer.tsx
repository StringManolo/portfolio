import React from 'react';

import telegramIcon from '../../assets/footer_icons/telegram.svg';
import linkedinIcon from '../../assets/footer_icons/linkedin.svg';
import twitterIcon from '../../assets/footer_icons/twitterx.svg';
import ehnIcon from '../../assets/footer_icons/ehn.svg';
import gmailIcon from '../../assets/footer_icons/gmail.svg';

import styles from './Footer.module.sass';

const Footer = () => {
  return (
    <footer className={styles['footer']} id="contact">
      <nav className={styles['footer-nav']}>
        <a href="https://t.me/stringmanolo">
          <img src={telegramIcon} alt="Telegram Icon" /> 
        </a>
        <a href="https://www.linkedin.com/in/manuel-varela-caldas-97576b207">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>
        <a href="https://twitter.com/xsstringmanolo">
          <img src={twitterIcon} alt="Twitter_x Icon" />
        </a>
        <a href="https://foro.elhacker.net/profiles/string_manolo-u595084.html">
          <img src={ehnIcon} alt="ElHacker.net Icon" />
        </a>
        <a href="mailto:manuelvarelacaldas@gmail.com">
          <img src={gmailIcon} alt="Gmail Icon" />
        </a>
      </nav>
      <div className={styles['sponsor-badge']}>
        <a href="https://github.com/sponsors/stringmanolo" target="_blank">
          <img
            src="https://img.shields.io/static/v1?label=Sponsor&message=GitHub&color=green&logo=github"
            alt="Sponsor on GitHub"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
