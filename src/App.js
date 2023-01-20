import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { users, MENUS } from "./util/data";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/app.css";
import Product from "./components/subcomponents/Product";
import Products from "./pages/Products";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoginCheck(userName, password) {
    users.map((user) => {
      if (user.userName === userName && user.password === password) {
        setIsLoggedIn(true);
        console.log("success");
      } else {
        console.log("error");
      }
    });
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/login"
          element={isLoggedIn ? <Home /> : <Login logState={LoginCheck} />}
        />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
