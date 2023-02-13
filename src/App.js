import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { users } from "./util/data";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "./style/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/subcomponents/Product";
import Products from "./pages/Products";
function App() {
  const [currentUser, setCurrentUser] = useState();

  function loginCheck(userName, password) {
    users.find((user) => {
      if (user.userName === userName && user.password === password) {
        setCurrentUser(user);
        console.log("success");
      }
    });
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/login/*"
          element={currentUser ? <Home /> : <Login loginCheck={loginCheck} />}
        />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
