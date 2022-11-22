import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))}
    </div>
  );
};

export default CheckOut;
