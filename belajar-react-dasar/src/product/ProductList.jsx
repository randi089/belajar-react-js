import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    console.info("UseEffect");
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }
    console.info("Load products");
    if (load) {
      fetchProducts();
    }
    return () => {
      console.info("Product List component unmounted");
    };
  }, [load]);
  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
