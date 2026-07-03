import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const { t } = useContext(LanguageContext);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>{t('cartEmpty')}</h2>
        <Link to="/" className="btn-return">{t('returnShop')}</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <table className="cart-table">
        <thead>
          <tr>
            <th>{t('product')}</th>
            <th>{t('price')}</th>
            <th>{t('quantity')}</th>
            <th>{t('subtotal')}</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="cart-product">
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✕</button>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </td>
              <td>${item.price}</td>
              <td>
                <input 
                  type="number" 
                  value={item.quantity} 
                  min="1" 
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="cart-actions">
        <Link to="/" className="btn-outline">{t('returnShop')}</Link>
      </div>

      <div className="cart-total">
        <h3>{t('cartTotal')}</h3>
        <div className="total-row">
          <span>{t('subtotal')}:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="total-row">
          <span>{t('shipping')}:</span>
          <span>{t('free')}</span>
        </div>
        <div className="total-row">
          <span>{t('total')}:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="btn-checkout">{t('checkout')}</button>
      </div>
    </div>
  );
}
