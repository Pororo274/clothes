import { Product as IProduct } from "../../interfaces/product.interface";
import Product from "../product";

export default function ProductsList({ products }: { products: IProduct[] }) {
  return (
    <div className="products-list">
      {products.map((x) => (
        <Product key={x.id} product={x} />
      ))}
    </div>
  );
}
