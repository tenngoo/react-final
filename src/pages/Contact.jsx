import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useContext(LanguageContext);
  return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
      <h2>{t('contactUs')}</h2>
    </div>
  );
}
