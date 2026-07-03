import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/axiosInstance';
import { LanguageContext } from '../context/LanguageContext';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useContext(LanguageContext);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data.slice(0, 8));
      setLoading(false);
    });
  }, []);

  if (loading) return <div style={{textAlign: 'center', padding: '50px'}}>{t('loading')}</div>;

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h2>{t('iphoneTitle')}</h2>
          <h1>{t('voucher')}</h1>
          <button className="shop-now">{t('shopNow')}</button>
        </div>
      </section>
      
      <section className="explore-products">
        <div className="section-title">
          <span className="red-block"></span> {t('ourProducts')}
        </div>
        <h2>{t('exploreProducts')}</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
