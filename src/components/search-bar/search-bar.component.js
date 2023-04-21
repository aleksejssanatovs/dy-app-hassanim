const SearchBar = (props) => {
    const {filter, inputValue} = props;

    return (
        <div className="text-center">
            <label>Search: 
                <input value={inputValue} onChange={(e) => filter(e)} type="text" className="border-2 mx-2 px-1 w-52 text-sm"/>
            </label>
        </div>
        
    )
}

export default SearchBar;