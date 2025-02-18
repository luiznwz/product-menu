import { useEffect, useState } from "react";
import CartList from "./components/CartList";
import ProductListing from "./components/ProductListing";
import { fetchProducts } from "./services/api";
import { ProductItem } from "./libs/types";
import Spinner from "./components/Spinner";

const Home = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        if (!data || data.length === 0) {
          throw new Error('No products available');
        }
        setProducts(data);
      } catch (error) {
        setError('Failed to load products. Please try again later.');
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="container flex items-center justify-center pt-8">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container pt-8 text-center text-rose-900">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="mb-8 pt-8 lg:mb-0">
      <div className="container lg:grid lg:grid-cols-[2.5fr_1fr] lg:gap-4">
        <div>
          <div className="mb-6">
            <h1 className="text-500 font-700">Products</h1>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {products.map((product) => (
              <ProductListing key={product.id} product={product} />
            ))}
          </div>
        </div>

        <CartList />
      </div>
    </section>
  );
};

export default Home;
