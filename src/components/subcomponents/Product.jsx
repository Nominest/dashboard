import { useParams } from "react-router-dom";
import "../../style/substyle/product.css";
import { useContext } from "react";
import { ProductHomeContext } from "../contexts/ProductContext";
import { UserContext } from "../contexts/UserContext";

export default function Product() {
  const { productsHome } = useContext(ProductHomeContext);
  const { currentUser, setCurrentUser } = useContext(UserContext); // add this line
  const { id } = useParams();

  const filteredData = productsHome.find((prod) => prod.id === id);

  const addToFavourites = () => {
    // create a copy of the user object to avoid modifying the state directly
    const newUser = { ...currentUser };
    // check if the product is already in the favourites array
    const index = newUser.favourites.findIndex((item) => item.id === id);
    if (index === -1) {
      // if the product is not in the favourites array, add it
      newUser.favourites.push(filteredData);
      // update the user state with the new favourites array
      setCurrentUser(newUser);
    }
  };

  return (
    <div>
      <div className="product-detail">
        <img
          className="single-cover-img"
          src={filteredData.image}
          alt=""
          width={500}
          height={500}
        />
        <div className="product-detail-">
          <p className="product-name">{filteredData.name}</p>
          <p className="product-price">{filteredData.price} ₮</p>
          <p className="product-stock">Үлдэгдэл: {filteredData.stock}</p>
          <div className="buttons">
            <button>Buy</button>
            <button onClick={addToFavourites}>Add to favourites</button>
          </div>
        </div>
      </div>
    </div>
  );
}

//https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/App.js

//https://codesandbox.io/s/ppbu7?file=/src/data.js
