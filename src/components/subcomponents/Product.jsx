import { useParams } from "react-router-dom";
import { datas } from "../../util/data";
import Header from "../Header";
import "../../style/substyle/product.css";
export default function Product() {
  const { id } = useParams();
  console.log(id);
  const thisProduct = datas.find((prod) => prod.id === id);
  return (
    <div>
      <Header />
      <div className="product-detail">
        <img
          className="single-cover-img"
          src={thisProduct.image}
          alt=""
          width={400}
          height={400}
        />
        <div className="product-detail-">
          <p className="product-name">{thisProduct.name}</p>
          <p className="product-price">{thisProduct.price} ₮</p>
          <p className="product-stock">Үлдэгдэл: {thisProduct.stock}</p>
          <div className="buttons">
            <button>Buy </button>
            <button>
              <img src="./book1.png" alt="" width={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

//https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/App.js

//https://codesandbox.io/s/ppbu7?file=/src/data.js
