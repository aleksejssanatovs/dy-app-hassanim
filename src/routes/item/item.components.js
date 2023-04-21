import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "../../toolkit/cart/cartSlice";
import setDYContext from "../../helpers/dyContext";

const Item = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const item = useSelector((state) => state.items).filter((item) => Number(item.id) === Number(params.id))[0];
    useEffect(() => {
        setDYContext("PRODUCT", [item.sku]);
    }, []);

    const handleAddToCart = () => {
        dispatch(addToCart(item))
    }


    return (
        <div className="mx-auto">
            <h2 className="text-center text-3xl font-bold mb-10">Product Page</h2>
            <div className="grid grid-cols-2 justify-items-center items-center align-middle mx-20 gap-5">
                <img className="h-72 justify-self-end" src={item.image_url} alt='item'/>
                <div className="justify-self-start">
                    <h3 className="font-bold text-xl my-4">{item.name}</h3>
                    <p className="my-4">{item.description}</p>
                    <h3 className="font-bold text-xl my-4">{item.price}$</h3>
                    <button onClick={handleAddToCart} className="bg-black text-white px-4">Add to Cart</button>
                </div>
            </div>
            <div className="text-center mx-auto my-20"><Link to="/shop">&#171; Back to Shop Page</Link></div>
            
        </div>
    )
}

export default Item;