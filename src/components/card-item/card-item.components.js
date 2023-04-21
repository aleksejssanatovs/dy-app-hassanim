import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeItem } from "../../toolkit/cart/cartSlice";

const CardItem = (product) => {
    const dispatch = useDispatch();
    const {id, name, price, image_url, quantity} = product.product;

    const handleDecrementItem = () => {
        dispatch(decrementQuantity(id));
    }

    const handleIncrementItem = () => {
        dispatch(incrementQuantity(id));
    }

    const handleItemRemove = () => {
        dispatch(removeItem(id));
    }

    return (
        <div className="grid grid-cols-4 justify-center	justify-items-center items-center my-5">
            <img className="h-36" src={image_url} alt="item" />
            <h3>{name}</h3>
            <h3>{price}$</h3>
            <div className="flex align-middle">
                <span onClick={handleDecrementItem} className="cursor-pointer">&lt;</span>
                <h3 className="mx-2">{quantity}x</h3>
                <span onClick={handleIncrementItem} className="cursor-pointer">&gt;</span>
                <span onClick={handleItemRemove} className="ml-2 cursor-pointer">&times;</span>
            </div>
            
        </div>
    )
}

export default CardItem;