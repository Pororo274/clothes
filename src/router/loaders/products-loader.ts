import { products } from "../../data/products";

export const productLoader = ({
  params,
}: {
  params: { productId: string };
}) => {
  return {
    product: products.find((x) => x.id === +params.productId),
  };
};
