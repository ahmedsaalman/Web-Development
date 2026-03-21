import Header from "./Header";
import ProductList from "./ProductList";

const products = [
  { id: 1, emoji: "🍕", name: "Pizza",  price: 850,   inStock: true  },
  { id: 2, emoji: "🧢", name: "Cap",    price: 1200,  inStock: false },
  { id: 3, emoji: "📱", name: "Phone",  price: 45000, inStock: true  },
  { id: 4, emoji: "👟", name: "Shoes",  price: 3500,  inStock: true  },
];

export default function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Header storeName="My React Store" count={products.length} />
      <ProductList products={products} />
    </div>
  );
}