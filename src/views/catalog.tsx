import "../assets/style/catalog.css";
import Filters from "../components/catalog/filters";
import ProductsList from "../components/lists/products-list";
import { products } from "../data/products";

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="h2">Каталог</h2>
        <Filters />
        <div className="catalog-products-list">
          <ProductsList products={products} />
        </div>
      </div>
    </section>
  );
}
