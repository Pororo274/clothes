import { useLoaderData } from "react-router-dom";
import image1 from "../assets/product/image1.jpg";
import image2 from "../assets/product/image2.jpg";
import image3 from "../assets/product/image3.jpg";
import image4 from "../assets/product/image4.jpg";
import image5 from "../assets/product/image5.jpg";
import { Product as IProduct } from "../interfaces/product.interface";
import Button from "../components/ui/button";
import ProductsList from "../components/lists/products-list";
import { products } from "../data/products";

export default function Product() {
  const { product } = useLoaderData() as { product: IProduct };
  const images = [image2, image3, image4, image5];

  return (
    <section className="product-view">
      <div className="container">
        <div className="wrapper product-view__wrapper">
          <aside className="product-view-aside">
            <figure className="product-view-banner">
              <img src={image1} alt="" className="product-view-banner__img" />
            </figure>
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginTop: "50px",
              }}
            >
              {images.map((x) => (
                <img src={x} alt="" className="product-view__photo" />
              ))}
            </div>
          </aside>
          <main className="product-view__main">
            <div className="wrapper">
              <h2 className="h2">{product.name}</h2>
              <p className="p">MT5538O02-99</p>
            </div>
            <h2
              className="h2"
              style={{
                marginTop: "50px",
                fontSize: "36px",
              }}
            >
              {product.price} ₽
            </h2>
            <p
              className="product-view__p"
              style={{
                marginTop: "60px",
              }}
            >
              Цвет: Чёрный
            </p>
            <p
              className="product-view__p"
              style={{
                marginTop: "30px",
              }}
            >
              Размер:
            </p>
            <div
              className="wrapper product-view-sizes__wrapper"
              style={{
                marginTop: "20px",
              }}
            >
              {["xs", "s", "m", "l", "xl"].map((x) => (
                <div className="product-view-sizes__size" key={x}>
                  {x.toUpperCase()}
                </div>
              ))}
            </div>
            <h3
              className="h3"
              style={{
                marginTop: "60px",
              }}
            >
              Описание:
            </h3>
            <p
              className="product-view__p"
              style={{
                marginTop: "30px",
              }}
            >
              {product.description}
            </p>
            <div
              className="wrapper"
              style={{
                marginTop: "80px",
                gap: "16px",
              }}
            >
              <Button
                style={{
                  flex: 1,
                }}
              >
                В корзину
              </Button>
              <Button
                style={{
                  width: "60px",
                }}
              >
                ass
              </Button>
            </div>
          </main>
        </div>
        <h2
          className="h2"
          style={{
            marginTop: "136px",
          }}
        >
          Популярные товары
        </h2>
        <div
          className="products-margin"
          style={{
            marginTop: "96px",
          }}
        >
          <ProductsList products={products.slice(0, 3)} />
        </div>
      </div>
    </section>
  );
}
