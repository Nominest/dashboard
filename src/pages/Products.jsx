import { useState } from "react";
import "../style/products.css";
import { datas } from "../util/data";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const [productDatas, setProductDatas] = useState(datas);
  const navigate = useNavigate();

  return (
    <div className="card">
      {productDatas ? (
        <div className="blog-content-section">
          <div className="blog-container">
            {productDatas.map((productData) => (
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
                <div className="price">${productData.price}</div>{" "}
                <button
                  onClick={() => {
                    navigate(`productData/${productData.id}`);
                  }}
                >
                  Дэлгэрэнгүй <img src="./book1.png" alt="" width={30} />
                </button>
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
