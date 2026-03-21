export default function Header({ storeName, count }) {
  return (
    <header style={{ borderBottom: "1px solid #ddd", padding: "16px", marginBottom: "20px" }}>
      <h1>{storeName}</h1>
      <p style={{ color: "#666", marginTop: "4px" }}>
        Fresh products, every day. — {count} products available
      </p>
    </header>
  );
}