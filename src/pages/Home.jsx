// import "../style/home.css";
import { Route, Routes } from "react-router-dom";
import SlideMenu from "../components/SlideMenu";
import Navbar from "../components/subcomponents/Navbar";
import Login from "./Login";
import Products from "./Products";
import Product from "../components/subcomponents/Product";

export default function Home() {
  return (
    <div className="home">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideMenu />
              <Navbar />
              {/* <Products /> */}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}
