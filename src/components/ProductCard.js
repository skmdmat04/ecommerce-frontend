import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  width: 200px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const ProductInfo = styled.div`
  h3 {
    margin: 10px 0;
    font-size: 18px;
    color: #333;
  }

  p {
    margin: 5px 0;
    color: #555;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Image src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Color: {product.color}</p>
        <p>Size: {product.size}</p>
        <p>Price: ${product.price}</p>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;
