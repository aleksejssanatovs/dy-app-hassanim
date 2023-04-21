const ProductItem = ({product}) => {
    const {image_url, name, price, description} = product;
    return (
        <div>
            <img className='h-48 my-2' src={image_url} alt="item" />
            <h3 className='font-bold'>{name}</h3>
            <p>{description}</p>
            <h4 className='font-bold'>{price}$</h4>
            <button className='bg-black text-white px-1 my-1'>Add To Cart</button>
        </div>
    )
}

export default ProductItem;