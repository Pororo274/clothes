import { Link } from "react-router-dom";
import Product from "./product";
import { products } from "../data/products";

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="h2">Каталог</h2>
        <div className="catalog-grid" style={{
          marginTop: "40px"
        }}>
          {products.slice(0, 6).map((x) => (
            <Product key={x.id} product={x} />
          ))}
        </div>
        <div className="catalog-link" style={{
          marginTop: "30px"
        }}>
          <Link
            to="/catalog"
            className="button"
            style={{
              background: "var(--black)",
              color: "var(--white)",
            }}
          >
            Каталог
          </Link>
        </div>
      </div>
    </section>
  );
}
