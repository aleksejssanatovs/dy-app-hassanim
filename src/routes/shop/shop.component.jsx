import { useSelector } from 'react-redux';
import ProductItem from '../../components/product-item/product-item.components';

const Shop = () => {
    const items = useSelector((state) => state.items);

    return (
        <div className='grid grid-cols-3 m-10 gap-12'>
            {items.map((item) => {
                return <ProductItem key={item.id} product={item} />
            })}
        </div>
    )
}

export default Shop;