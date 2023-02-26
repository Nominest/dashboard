import "../style/header.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { UserContext } from "./contexts/UserContext";

export default function Header() {
  const { currentUser, loggedIn, favouriteProducts } = useContext(UserContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div
        onClick={() => {
          {
            navigate("/");
          }
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
              id="signedin"
              to="signin"
              onClick={() => {
                navigate("/login");
              }}
            >
              {loggedIn ? `Welcome, ${currentUser.userName}` : "Sign In"}
              <img src="./refer.png" alt="" width={40} />
            </button>
          </li>
          <Button variant="primary" onClick={handleShow} className="me-2">
            Favourites ({favouriteProducts})
          </Button>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Favourites</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {currentUser.favourites && currentUser.favourites.length > 0 ? (
                <ul>
                  {currentUser.favourites.map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              ) : (
                "No favourites"
              )}
            </Offcanvas.Body>
          </Offcanvas>
        </ul>
      </div>
    </header>
  );
}
