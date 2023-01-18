import "../../style/substyle/navbar.css";
import { getData, filterData } from "./Filter";
import { useState, useEffect } from "react";
import { buttons } from "../../util/data";
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

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handlePokemon}>
              {type.name}
            </button>
          </>
        ))}

      {filtredData &&
        filtredData.map((type) => (
          <ul key={type.id}>
            <li>{type.name}</li>
          </ul>
        ))}
    </>
  );
}
