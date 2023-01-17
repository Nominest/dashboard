import { useParams } from "react-router-dom";

export default function ProductSpec() {
  const { id } = useParams;
  console.log(id);
  return <div>Product Specification</div>;
}
