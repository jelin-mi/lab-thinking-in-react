import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import '../App.css';

function ProductsPage() {

  const [products, setProducts] = useState(jsonData);

  // ------------------------ const myProducts = [...products];   // no hace falta hacer la copia de array inicial?

  // Bonus - filter stock
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


  // Bonus - filter stock
  const onCheckbox = (e) => {
    setStockFilter((state) => !state); // -------------- state puede ser cualquier cosa?? sí
  };
  


  /* const filterProducts = (searchTerm) => {
    let filteredProducts;

    if (searchTerm === '') {
      filteredProducts = myProducts;
    } else {
      filteredProducts = myProducts.filter((product) => {
        return product.name.toLowerCase() === searchTerm.toLowerCase();
      });
    }
    setProducts(filteredProducts);
  }; */

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
