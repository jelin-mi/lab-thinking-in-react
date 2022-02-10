import '../App.css';

function ProductRow({ name, price, inStock }) {
  return (
    <tr>
      <td style={{ color: inStock ? 'black' : '#e74c3c' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
