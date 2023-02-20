import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="side-bar d-flex flex-column p-3">
        <Link to="products">All Products</Link>
        <a href="/">All Categories</a>
      </div>
    </>
  );
}
export default Sidebar;
