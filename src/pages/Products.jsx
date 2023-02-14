import { useContext } from "react";
import "../style/products.css";
import { useNavigate, Link } from "react-router-dom";
import { ProductHomeContext } from "../App";

export default function Products() {
  const { productsHome } = useContext(ProductHomeContext);
  const navigate = useNavigate();

  return (
    <div className="card">
      {productsHome ? (
        <div className="blog-content-section">
          <div className="blog-container">
            {productsHome.map((productData, id) => (
              <div className="blog-post" key={productData.id}>
                <img
                  className="cover-img"
                  src={productData.image}
                  alt=""
                  width={200}
                  height={200}
                />
                <p className="name">{productData.name}</p>
                <p className="description">{productData.category}</p>
                <div className="price">${productData.price}</div>
                <div className="buttons">
                  <Link to={`/product/${productData.id}`}> Дэлгэрэнгүй</Link>
                  <button
                    onClick={() => {
                      navigate(`productData/${productData.id}`);
                    }}
                  >
                    <img src="./book1.png" alt="" width={30} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          ;
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
