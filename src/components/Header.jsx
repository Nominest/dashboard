import "../style/header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="./E-logo.svg" alt="" />
      </div>
      <div className="searchbar">
        <input type="text" placeholder="Search anything" />
        <button className="search">
          <a href="">Search</a>
        </button>
      </div>
      <div className="signin">
        <ul>
          <li>
            <button
              to="signin"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In <img src="./refer.png" alt="" width={40} />
            </button>
          </li>
          <li>
            <a href="">
              Favourites
              <img src="./book1.png" alt="" width={40} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

//https://codesandbox.io/s/n5novwm4y0 search
