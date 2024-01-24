import { Link } from "react-router-dom";
import Product from "./product";

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="h2">Каталог</h2>
        <div className="catalog-grid">
          {[1, 2, 3].map((x) => (
            <Product key={x} />
          ))}
        </div>
        <div className="catalog-link">
          <Link to="/catalog" className="button">
            Каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
