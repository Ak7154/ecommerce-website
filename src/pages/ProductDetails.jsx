import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const product = products.find(p => p.id === Number(id));

  const addToCart = () => {
    dispatch({ type: "adding", payload: product });
  };

  const buyNow = () => {
    dispatch({ type: "clearing" });
    dispatch({ type: "adding", payload: product });
    navigate("/checkout");
  };

  return (
   <div className="details">
  <img src={product.image} alt={product.title} />
  <div className="info">
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <h3>${product.price}</h3>

    <div className="actions">
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={buyNow}>Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default ProductDetails;
