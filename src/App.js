import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/subcomponents/Product";
import Products from "./pages/Products";
import axios from "axios";
import { createContext, useEffect } from "react";

export const ProductHomeContext = createContext();
export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState([{}]);
  const [productsHome, setProductsHome] = useState([{}]);
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(currentUser);

  //products
  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("http://localhost:2500/home/products")
        .then((response) => setProductsHome(response.data))
        .catch(() => console.log("context"));
    };
    fetchProducts();
  }, []);

  //user
  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get("http://localhost:2500/home/user")
        .then((response) => setCurrentUser(response.data))
        .catch(() => console.log("user"));
    };
    fetchUsers();
  }, []);

  function loginCheck(userName, password) {
    console.log(currentUser);
    currentUser.find((user) => {
      if (user.userName === userName && user.password === password) {
        setCurrentUser(user);
        setLoggedIn(true);
        localStorage.setItem("currentUser", user);
        console.log("success", user);
      }
    });
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, setCurrentUser, loggedIn }}>
        <ProductHomeContext.Provider value={{ productsHome, setProductsHome }}>
          <Header currentUser={currentUser} />
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route
              path="/login/*"
              element={loggedIn ? <Home /> : <Login loginCheck={loginCheck} />}
            />
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </ProductHomeContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
