function ProductCard({ name, price, emoji, inStock }) {
  return (
    <div>
      <span>{emoji}</span>
      <h2>{name}</h2>
      <p>Rs. {price}</p>
      <p>{inStock ? "In stock" : "Sold out"}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <ProductCard emoji="🍕" name="Pizza"   price={850}   inStock={true} />
      <ProductCard emoji="🧢" name="Cap"     price={1200}  inStock={false} />
      <ProductCard emoji="📱" name="Phone"   price={45000} inStock={true} />
    </div>
  );
}