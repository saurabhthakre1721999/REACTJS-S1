import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ProductCard,
  ProductCardImage,
  ProductTitle,
  ProductsContainer,
} from "./ProductList.Styles";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      console.log("Results: ", result.data);
      setProducts(result.data || []);
    })();

    return () => {
      console.log("Unmouting List");
    };
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
