import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import cartSlice from '../../toolkit/cart/cartSlice';

const Cart = () => {

    const cartProducts = useSelector((state) => state.cart.cart);
    return(
        <div class="grid grid-flow-col hover:grid-flow-row">
            { cartProducts.length > 0 ? (
                <div>
                    {
                        cartProducts.map((product) => (
                            <div>{product.name}</div>
                        ))
                    }
                </div>
            ) : (
                <div>You do not have products in cart</div>
            )}
        </div>
    )
}

export default Cart;