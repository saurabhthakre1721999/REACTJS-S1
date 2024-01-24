import { useState } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { meraProductId } = useParams();

  return (
    <div>
      <h1>My Products Details: {meraProductId}</h1>
      <hr />
      {/**List Logic */}
    </div>
  );
};

export default ProductDetails;
