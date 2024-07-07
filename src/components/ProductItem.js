// src/components/ProductItem.js
import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  width: 200px;
  text-align: center;
`;

const ProductItem = ({ product }) => {
  return (
    <ProductCard>
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </ProductCard>
  );
};

export default ProductItem;
