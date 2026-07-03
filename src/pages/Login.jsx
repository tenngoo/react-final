import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

export default function Login() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&auto=format&fit=crop&q=60" alt="Shopping Cart" />
      </div>
      <div className="login-form-container">
        <h2>{t('loginTitle')}</h2>
        <p>{t('enterDetails')}</p>
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder={t('emailPlaceholder')} required />
          <input type="password" placeholder={t('passwordPlaceholder')} required />
          <div className="login-actions">
            <button type="submit" className="btn-login">{t('login')}</button>
            <Link to="/forgot-password" className="forgot-password">{t('forgetPassword')}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
