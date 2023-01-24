import { useNavigate } from "react-router-dom";
import "../style/slide.css";

export default function SlideMenu() {
  const navigate = useNavigate();
  return (
    <div className="slider">
      <div className="slider-left">
        <div className="camera">
          <div>Canon</div>
          <div>camera</div>
        </div>
        <div>
          <ul>
            <li>
              <button
                to="signin"
                onClick={() => {
                  navigate("/products");
                }}
              >
                Shop Now
              </button>
            </li>
            <li>
              <a href="" id="view">
                View More
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="slider-right">
        <img src="./cam1.png" alt="" />
      </div>
    </div>
  );
}
