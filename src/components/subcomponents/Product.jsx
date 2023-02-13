import { useParams } from "react-router-dom";
import { datas } from "../../util/data";
import "../../style/substyle/product.css";

export default function Product() {
  const { id } = useParams();
  console.log(id);
  const filtredData = datas.find((prod) => prod.id === id);
  return (
    <div>
      <div className="product-detail">
        <img
          className="single-cover-img"
          src={filtredData.image}
          alt=""
          width={400}
          height={400}
        />
        <div className="product-detail-">
          <p className="product-name">{filtredData.name}</p>
          <p className="product-price">{filtredData.price} ₮</p>
          <p className="product-stock">Үлдэгдэл: {filtredData.stock}</p>
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
