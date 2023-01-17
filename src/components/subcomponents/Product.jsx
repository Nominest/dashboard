import { useParams } from "react-router-dom";
import datas from "../../util/data";

export default function ProductSpec() {
  const { id } = useParams();
  console.log(id);
  const thisProduct = datas.map((prod) => prod.id === id);
  return (
    <div>
      <p>
        {thisProduct.image}
        hello
      </p>
    </div>
  );
}

//https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/App.js
