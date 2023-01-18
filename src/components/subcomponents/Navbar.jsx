import "../../style/substyle/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <button>Popular Products</button>
      </div>
      <div className="nav-right" onClick={filteringCategory}>
        <button>Cameras</button>
        <button>Laptops</button>
        <button>Tablets</button>
        <button>Mouse</button>
        <button>Sale</button>
      </div>
    </div>
  );
}
//https://codesandbox.io/s/filter-with-react-button-forked-vtcrn1?file=/src/App.js
