import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/axiosInstance';
import { CartContext } from '../context/CartContext';
import { LanguageContext } from '../context/LanguageContext';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { t } = useContext(LanguageContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div style={{textAlign: 'center', padding: '50px'}}>{t('loading')}</div>;

  return (
    <div className="product-details">
      <div className="product-details-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h2>{product.title}</h2>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        
        <div className="actions">
          <div className="quantity-selector">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button 
            className="btn-buy" 
            onClick={() => addToCart({ ...product, quantity })}
          >
            {t('buyNow')}
          </button>
        </div>
      </div>
    </div>
  );
}
