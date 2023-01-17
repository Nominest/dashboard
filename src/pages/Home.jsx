// import "../style/home.css";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import SlideMenu from "../components/SlideMenu";
import Navbar from "../components/subcomponents/Navbar";
import Login from "./Login";
import Products from "./Products";
import Product from "../components/subcomponents/Product";
import ProductSpec from "./ProductSpec";
export default function Home() {
  return (
    <div className="home">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <SlideMenu />
              <Navbar />
              <Products />
            </>
          }
        />
        {/* <Route path="product/:id" element={<Product />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
