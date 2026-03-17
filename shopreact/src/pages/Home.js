import ProductList from '../components/ProductList'
import products from '../data/products'



function Home() {
  return (
    <div className="home">
      <h2 className="section-title">Our Products</h2>
      <ProductList products={products} />
    </div>
  )
}

export default Home