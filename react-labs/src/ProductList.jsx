import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          emoji={product.emoji}
          inStock={product.inStock}
        />
      ))}
    </div>
  );
}