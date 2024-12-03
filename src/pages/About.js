import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import ProductCard from '../components/ProductCard/ProductCard';
import { fetchProducts } from '../services/api';

const About= () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <div className="home-page">
      <h2>Về chúng tôi</h2>
test about page
    </div>
  );
};

export default About;
