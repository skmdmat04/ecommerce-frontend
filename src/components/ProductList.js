// src/components/ProductList.js
import React from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
};

export default ProductList;
