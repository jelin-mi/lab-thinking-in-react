/* import { useState } from 'react'; */
import '../App.css';

function SearchBar( {onFilter} ) {
  /* const [searchTerm, setSearchTerm] = useState(''); */

  const handleSearch = (e) => {
    onFilter(e.target.value);
    /* setSearchTerm(e.target.value);
    myProducts.filterProducts(e.target.value);
    myProducts.handleSearch(e.target.value); */
  };

  return (
    <>
      <h2>Search</h2>
      <div className="boxes">
        <input
          className="search"
          type="text"
          placeholder="Start typing here..."
          /* value={searchTerm}*/
          onChange={handleSearch}
        />

        {/* <input className="check" type="checkbox" />
        <label>Only show products in stock</label> */}
      </div>
    </>
  );
}

export default SearchBar;


// onFilter = filterProducts