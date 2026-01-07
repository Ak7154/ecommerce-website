import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();

  const total = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (state.cartItems.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {state.cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Qty: {item.qty}</p>
          <p>₹{item.price * item.qty}</p>
          <button
            onClick={() =>
              dispatch({ type: "removing", payload: item.id })
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
      <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
