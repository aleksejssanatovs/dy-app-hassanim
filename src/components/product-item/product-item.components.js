import { addToCart } from "../../toolkit/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductItem = ({product}) => {
    const {image_url, name, price, description} = product;
    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(addToCart(product));
    }
    return (
        <Link to={`/item/${product.id}`}>
            <img className='h-48 my-2' src={image_url} alt="item" />
            <h3 className='font-bold'>{name}</h3>
            <p>{description}</p>
            <h4 className='font-bold'>{price}$</h4>
            <button className='bg-black text-white px-1 my-1' onClick={() => addProductToCart(product)}>Add To Cart</button>
        </Link>
    )
}

export default ProductItem;