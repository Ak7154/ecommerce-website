import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
