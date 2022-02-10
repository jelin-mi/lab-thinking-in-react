import { useState } from 'react';
import '../App.css';

function SearchBar( {myProducts, filterProducts} ) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    myProducts.filterProducts(e.target.value);
    myProducts.handleSearch(e.target.value);
  };

  return (
    <>
      <h2>Search</h2>
      <div className="boxes">
        <input
          className="search"
          type="text"
          placeholder="Start typing here..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <input className="check" type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </>
  );
}

export default SearchBar;
