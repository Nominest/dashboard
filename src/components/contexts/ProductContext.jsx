import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProductHomeContext = createContext();

export function ProductProvider({ children }) {
  const [productsHome, setProductsHome] = useState([{}]);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get("http://localhost:2500/home/products")
        .then((response) => setProductsHome(response.data))
        .catch(() => console.log("context"));
    };
    fetchProducts();
  }, []);

  return (
    <ProductHomeContext.Provider value={{ productsHome, setProductsHome }}>
      {children}
    </ProductHomeContext.Provider>
  );
}
