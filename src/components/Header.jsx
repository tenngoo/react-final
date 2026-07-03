import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);
  const { language, setLanguage, t } = useContext(LanguageContext);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-top">
        <p>{t('bannerMsg')}</p>
        <div className="header-lang">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} style={{background: 'transparent', color: '#fff', border: 'none', outline: 'none'}}>
            <option value="en" style={{color: '#000'}}>{t('english')}</option>
            <option value="ka" style={{color: '#000'}}>{t('georgian')}</option>
          </select>
        </div>
      </div>
      <div className="header-main">
        <Link to="/" className="logo">{t('logo')}</Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">{t('home')}</Link></li>
            <li><Link to="/contact">{t('contact')}</Link></li>
            <li><Link to="/about">{t('about')}</Link></li>
            <li><Link to="/login">{t('login')}</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link to="/cart" className="cart-icon">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
