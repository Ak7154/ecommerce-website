import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: []
};

function cartReducer(state, action) {
  switch (action.type) {
    case "adding": {
      const existing = state.cartItems.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }]
      };
    }

    case "removing":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload
        )
      };

    case "clearing":
      return initialState;

    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
