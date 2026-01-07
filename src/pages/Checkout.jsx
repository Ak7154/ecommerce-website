import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { state, dispatch } = useCart();

  const total = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    alert("Order placed successfully!");
    dispatch({ type: "clearing" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Order Summary</h2>

      {state.cartItems.map(item => (
        <p key={item.id}>
          {item.title} × {item.qty}
        </p>
      ))}

      <h3>Total: ₹{total}</h3>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
