import { Route, Routes, NavLink } from "react-router-dom";
import "../style/header.css";
import Login from "../pages/Login";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <div>
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
            <div
              to="signin"
              onClick={() => {
                navigate("/login");
              }}
            >
              <a href=""> Sign In</a>
            </div>
          </li>
          <li>
            <a href="">Favourites</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
