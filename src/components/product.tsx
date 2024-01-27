import "../assets/style/product.css";
import productImg from "../assets/img/product.png";
import Button from "./ui/button";
import { Link } from "react-router-dom";
import { Product as IProduct } from "../interfaces/product.interface";

interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  return (
    <div className="product">
      <div className="product-photo">
        <img src={productImg} alt="" className="product-photo__" />
      </div>
      <Link to={"/products/" + product.id} className="product__link">
        <h3 className="h3 product__h3">{product.name}</h3>
      </Link>
      <h3 className="product-price">{product.price} ₽</h3>
      <Button className="catalog-button">В корзину</Button>
    </div>
  );
}
