export default function Product({ product }) {
  return (
    <>
      <h2>
        {product.id} : {product.name}
      </h2>
      <p>Harga : {product.price} </p>
    </>
  );
}
