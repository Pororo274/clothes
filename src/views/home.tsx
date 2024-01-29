import Banner from "../components/banner";
import Catalog from "../components/catalog";
import Partners from "../components/home/partners";
import PopularProducts from "../components/home/popular-products";
import Subscription from "../components/home/subscription";

function Home() {
  return (
    <>
      <Banner />
      <Catalog />
      <Partners />
      <Subscription />
      <PopularProducts />
    </>
  );
}

export default Home;
