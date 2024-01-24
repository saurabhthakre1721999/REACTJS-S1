import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { meraProductId } = useParams();

  useEffect(() => {
    (async () => {
      const result = await axios.get(
        `https://fakestoreapi.com/products/${meraProductId}`
      );
      setProduct(result.data);
    })();
  }, [meraProductId]);

  return (
    <div>
      <h1>My Products Details: {meraProductId}</h1>
      <hr />
      <div>
        {product?.id && (
          <ProductCard>
            <ProductCardImage src={product.image} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductTitle>$ {product.price}</ProductTitle>
            <ProductTitle>{product.description}</ProductTitle>
          </ProductCard>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

const ProductCard = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  align-items: center;
`;

const ProductCardImage = styled.img`
  width: 100px;
  height: 100px;
`;

const ProductTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
