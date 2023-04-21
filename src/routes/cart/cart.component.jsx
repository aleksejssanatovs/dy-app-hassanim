import { useSelector } from "react-redux";
import { useEffect } from "react";
import CardItem from "../../components/card-item/card-item.components";
import setDYContext from "../../helpers/dyContext";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cart);
  const totalCounter = useSelector((state) => state.cart.cartTotal);

  useEffect(() => {
    setDYContext("CART", [cartProducts.map((product) => product.sku)]);
  }, []);
  
  return (
    <div className=" hover:grid-flow-row">
      <div className="grid grid-cols-4 justify-center	justify-items-center items-center">
        <h3 className="font-bold">Product</h3>
        <h3 className="font-bold">Name</h3>
        <h3 className="font-bold">Price</h3>
        <h3 className="font-bold">Quantity</h3>
      </div>
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map((product) => (
            <CardItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center my-5">You do not have products in cart</div>
      )}
      <div className="text-center font-bold text-2xl">
        Total: {totalCounter}$
      </div>
    </div>
  );
};

export default Cart;
