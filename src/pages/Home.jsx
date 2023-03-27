import { Route, Routes } from "react-router-dom";
import SlideMenu from "../components/SlideMenu";
import Navbar from "../components/subcomponents/Navbar";
import Products from "./Products";
import Product from "../components/subcomponents/Product";
import Sale from "../components/subcomponents/Sale";
import Brands from "../components/subcomponents/Brands";
import Footer from "../components/Footer";
import Users from "./Users";
import { useState, useContext } from "react";
import Login from "./Login";
import { ProductHomeContext } from "../components/contexts/ProductContext";

export default function Home() {
  // const [loggedIn, setLoggedIn] = useState(false);
  const { loginCheck, loggedIn } = useContext(ProductHomeContext);

  return (
    <div className="home">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideMenu />
              <Navbar />
              <Sale />
              <Brands />
              <Footer />
            </>
          }
        />
        {/* <Route path="/login" element={<Footer />} /> */}
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={loggedIn ? <Home /> : <Users />} />
      </Routes>
    </div>
  );
}
