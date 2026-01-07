import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="layout">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="cost">₹{product.price}</p>
      <button onClick={() => navigate(`/product/${product.id}`)}>
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
