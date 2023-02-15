import "../../style/substyle/navbar.css";
// import { getData, filterData } from "./Filter";
// import { datas } from "../../util/data";
import { useState, useEffect } from "react";
import { buttons } from "../../util/data";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductContext";

export default function Navbar() {
  const [filtredData, setFiltredData] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState();
  const { productsHome } = useContext(ProductHomeContext);

  const navigate = useNavigate();

  function filterData(dataType) {
    return productsHome.filter((type) => type.category === dataType);
  }

  useEffect(() => {
    setFiltredData(productsHome);
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredData(filterData(typePokemon))
      : setFiltredData(productsHome);
  }

  return (
    <div className="nav">
      {buttons &&
        buttons.map((type, index) => (
          <button key={index} value={type.value} onClick={handlePokemon}>
            {type.name}
          </button>
        ))}
      {filtredData ? (
        <div className="blog-content-section">
          <div className="blog-container">
            {filtredData.slice(0, 6).map((productData, i) => (
              <div className="blog-post" key={i}>
                <Link to={`/product/${productData.id}`}>
                  <div
                    className="prod"
                    onClick={() => {
                      navigate(`productData/${productData.id}`);
                    }}
                  >
                    <img
                      className="cover-img"
                      src={productData.image}
                      alt=""
                      width={200}
                      height={200}
                    />
                    <p className="name">{productData.name}</p>{" "}
                  </div>
                </Link>
                <p className="description">{productData.category}</p>
                <div className="price">${productData.price}</div>
                <div>
                  {productData.sale > 0 ? (
                    <p className="sale">{productData.sale}% off</p>
                  ) : (
                    console.log(" ")
                  )}
                </div>
                <div className="favourite">
                  <button
                    onClick={() => {
                      navigate(`basket/${productData.id}`);
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
