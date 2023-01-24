import "../../style/substyle/sale.css";

export default function SpecialProduct() {
  return (
    <div className="specialimage">
      <img src="./pexel.png" alt="" width={1280} />
      <div className="specialright">
        <p id="orange">New Laptop</p>
        <p id="sale">Sale up to 50% off</p>
        <p id="white">12 inch hd display</p>
        <p>
          <a href="" id="orange">
            Shop Now
          </a>
        </p>
      </div>
    </div>
  );
}
