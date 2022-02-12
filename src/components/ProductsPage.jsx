import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import '../App.css';

function ProductsPage() {

  const [products, setProducts] = useState(jsonData);

  // Bonus - filter stock useState
  const [stockFilter, setStockFilter] = useState(false);


  const onFilter = (searchTerm) => {
    if (searchTerm === '') {
      setProducts(jsonData);
    } else {
      setProducts(
        jsonData.filter((product) => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };


  // Bonus - filter stock function
  const onCheckbox = (e) => {
    setStockFilter((state) => !state);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar onFilter={onFilter} />
      <div className='boxes'>
      <input className="check" type="checkbox" onChange={onCheckbox} />
        <label>Only show products in stock</label>

      </div>
      <ProductTable myProducts={
          !stockFilter
            ? products
            : products.filter((product) => product.inStock === true)
        } />
    </div>
  );
}

export default ProductsPage;