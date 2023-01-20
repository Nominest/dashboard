import "../../style/substyle/navbar.css";
import { getData, filterData } from "./Filter";
import { useState, useEffect } from "react";
import { buttons } from "../../util/data";
import { useNavigate, Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";
import Products from "../../pages/Products";
export default function Navbar() {
  const [filtredData, setFiltredData] = useState(null);
  useEffect(() => {
    setFiltredData(getData());
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredData(filterData(typePokemon))
      : setFiltredData(getData());
  }
  const navigate = useNavigate();

  return (
    <div className="nav">
      {/* <button
        onClick={() => {
          navigate(<Products />);
        }}
      >
        All
      </button> */}
      {buttons &&
        buttons.map((type, index) => (
          <button key={index} value={type.value} onClick={handlePokemon}>
            {type.name}
          </button>
        ))}
      {filtredData ? (
        <div className="blog-content-section">
          <div className="blog-container">
            {filtredData.slice(0, 6).map((productData) => (
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
                <div className="sale">{productData.sale}% off</div>
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
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}
