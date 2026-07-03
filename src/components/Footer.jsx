import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>{t('logo')}</h3>
          <p>{t('subscribe')}</p>
          <p>{t('getOff')}</p>
        </div>
        <div className="footer-col">
          <h3>{t('support')}</h3>
          <p>{t('address')}</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="footer-col">
          <h3>{t('account')}</h3>
          <p>{t('myAccount')}</p>
          <p>{t('loginRegister')}</p>
          <p>{t('cart')}</p>
          <p>{t('wishlist')}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>{t('copyright')}</p>
      </div>
    </footer>
  );
}
