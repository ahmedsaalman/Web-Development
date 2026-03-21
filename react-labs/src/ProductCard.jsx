export default function ProductCard({ name, price, emoji, inStock }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", width: "160px" }}>
      <span style={{ fontSize: "28px" }}>{emoji}</span>
      <h3 style={{ margin: "8px 0 4px" }}>{name}</h3>
      <p style={{ color: "#666", fontSize: "13px" }}>Rs. {price}</p>
      <p style={{ fontSize: "12px", marginTop: "6px", color: inStock ? "green" : "red" }}>
        {inStock ? "In stock" : "Sold out"}
      </p>
    </div>
  );
}