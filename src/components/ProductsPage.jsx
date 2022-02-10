import { useState } from 'react';
import jsonData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import '../App.css';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const myProducts = [...products];

  const filterProducts = (searchTerm) => {
    let filteredProducts;

    if (searchTerm === '') {
      filteredProducts = myProducts;
    } else {
      filteredProducts = myProducts.filter((product) => {
        return product.name.toLowerCase() === searchTerm.toLowerCase();
      });
    }
    setProducts(filteredProducts);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar myProducts={myProducts} filterProducts={filterProducts} />
      <ProductTable myProducts={myProducts} />
    </div>
  );
}

export default ProductsPage;
