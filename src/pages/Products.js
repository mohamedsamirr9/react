import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const getProductsData = async function () {
    const response = await fetch("http://localhost:9000/products");
    const data = await response.json();
    setProducts(data);
  };
  const deleteProduct = async function (productId) {
    const response = await fetch(
      `http://localhost:9000/products/${productId}`,
      { method: "DELETE" }
    );
    const data = await response.json();
    getProductsData();
  };
  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <>
      <h1>Our Products</h1>
      <button className="btn btn-success">Add Product</button>
      <table className="table table-striped mt-5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr className="Product" key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <Link className="btn btn-info" to={`/products/${product.id}`}>
                    View
                  </Link>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
