import "../../style/substyle/navbar.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <ul>
          <li>
            <a href="">Popular Products</a>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <a href="">Cameras</a>
          </li>
          <li>
            <a href="">Laptops</a>
          </li>
          <li>
            <a href="">Tablets</a>
          </li>
          <li>
            <a href="">Mouse</a>
          </li>
          <li>
            <a href="">Sale</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
