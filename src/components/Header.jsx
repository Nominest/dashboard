import "../style/header.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <Button variant="primary" onClick={handleShow} className="me-2">
              Favourites
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
            {/* <a href="">
              Favourites
              <img src="./book1.png" alt="" width={40} />
            </a> */}
          </li>
        </ul>
      </div>
    </header>
  );
}

//https://codesandbox.io/s/n5novwm4y0 search
