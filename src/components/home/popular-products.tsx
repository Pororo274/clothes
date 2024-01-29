import ProductsList from "../lists/products-list";
import { products } from "../../data/products";

export default function PopularProducts() {
    return (
        <section className="popular-products" style={{
            paddingTop: "136px"
        }}>
            <div className="container">
                <h2 className="h2">Популярные товары</h2>
                <div style={{
                    marginTop: "96px"
                }}>
                    <ProductsList products={products.slice(0, 3)} />
                </div>
            </div>
        </section>
    )
}