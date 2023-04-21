import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/product-item/product-item.components';
import SearchBar from '../../components/search-bar/search-bar.component';

const Shop = () => {
    const items = useSelector((state) => state.items);
    const [filteredItems, setFilteredItems] = useState(items);
    const [inputName, setInputName] = useState('');

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const newItems = items.filter((item) => item.name.toLowerCase().includes(keyword.toLowerCase()));
            setFilteredItems(newItems);
        } else {
            setFilteredItems(items);
        }
        setInputName(keyword);
    }

    return (
        <div>
            <SearchBar filter={filter} value={inputName} className="text-center" />
            {filteredItems.length === 0 && inputName !== '' ? <div className='text-center font-bold my-4'>Not found any items...</div> : '' }
            <div className='grid grid-cols-3 m-10 gap-12 justify-items-center'>
            {filteredItems.map((item) => {
                return <ProductItem key={item.id} product={item} />
            })}
            </div>
        </div>
        
    )
}

export default Shop;