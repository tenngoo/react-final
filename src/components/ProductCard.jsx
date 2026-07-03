import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';
import Modal from './Modal';

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { t } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsModalOpen(true);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {t('addToCart')}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <p className="product-price">${product.price}</p>
      </div>
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{padding: '20px', textAlign: 'center'}}>
          <h3 style={{marginBottom: '10px'}}>{t('addToCart')} ✅</h3>
          <p>{product.title}</p>
          <button style={{marginTop: '20px'}} className="btn-login" onClick={() => setIsModalOpen(false)}>OK</button>
        </div>
      </Modal>
    </div>
  );
}
