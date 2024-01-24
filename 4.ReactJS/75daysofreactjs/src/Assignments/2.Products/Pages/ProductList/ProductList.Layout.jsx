import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      console.log("Results: ", result.data);
      setProducts(result.data || []);
    })();
  }, []);

  return (
    <div>
      <h1>My Products</h1>
      <hr />
      {/**List Logic */}
      <ProductsContainer>
        {Array.isArray(products) &&
          products.map((item) => {
            return (
              <Link to={`/details/${item.id}`} key={item.id}>
                <ProductCard>
                  <ProductCardImage src={item.image} />
                  <ProductTitle>{item.title}</ProductTitle>
                </ProductCard>
              </Link>
            );
          })}
      </ProductsContainer>
    </div>
  );
};

export default ProductList;

const ProductsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ProductCard = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  width: 200px;
  height: 160px;
  border: 1px solid silver;
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
