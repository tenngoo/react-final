import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function About() {
  const { t } = useContext(LanguageContext);
  return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
      <h2>{t('aboutUs')}</h2>
    </div>
  );
}
