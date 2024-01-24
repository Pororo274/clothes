import "../assets/style/product.css";
import product from "../assets/img/product.png";
import Button from "./ui/button";

export default function Product() {
  return (
    <div className="product">
      <div className="product-photo">
        <img src={product} alt="" className="product-photo__" />
      </div>
      <h3 className="h3 product__h3">Крутая черная футболка!</h3>
      <h3 className="product-price">1 999 ₽</h3>
      <Button className="catalog-button">В корзину</Button>
    </div>
  );
}
