import ProductRow from './ProductRow';
import '../App.css';

function ProductTable({ myProducts }) {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {myProducts.map((product) => {
          return (
            <ProductRow
              key={product.id}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
