import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const getProductDate = async function () {
    const response = await fetch(`http://localhost:9000/products/${productId}`);
    const data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDate();
  }, []);
  return (
    <>
      <div className="card">
        <img
          src={product.image}
          className="card-img-top w-25 h-25"
          alt="Photo"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
