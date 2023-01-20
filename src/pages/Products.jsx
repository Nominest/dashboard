import { useState } from "react";
import "../style/products.css";
import { datas } from "../util/data";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../components/subcomponents/Navbar";

export default function Products() {
  const [productDatas, setProductDatas] = useState(datas);
  const navigate = useNavigate();

  // filteringCategory = (e) => {
  //   let categ = e.target.value;
  //   if (categ === "") {
  //     this.setState({ cat: categ, products: datas }) } else {
  //       this.setState({
  //         cat:categ,
  //         products: datas.filter((filProd) => {
  //           return filProd.category.indexOf(e.target.value) >= 0
  //         })
  //       })
  //     };
  //   }
  // };

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
