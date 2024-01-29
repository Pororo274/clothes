import { products } from "../../data/products";

export const productLoader = ({ params }) => {
  return {
    product: products.find((x) => x.id === +params.productId),
  };
};
